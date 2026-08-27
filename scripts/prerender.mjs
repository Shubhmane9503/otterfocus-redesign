/**
 * Static SEO renderer for Otterfocus. It turns the existing React/Wouter portfolio routes into
 * crawler-ready HTML documents without changing the client-side editorial experience.
 */
import fs from "node:fs";
import path from "node:path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Router } from "wouter";
import App from "../client/src/App.tsx";
import { absoluteUrl, staticPages } from "../client/src/lib/static-seo.ts";
import { site } from "../client/src/lib/site.ts";

const projectRoot = path.resolve(import.meta.dirname, "..");
const outputRoot = path.join(projectRoot, "dist", "public");
const entryPath = path.join(outputRoot, "index.html");
const entryDocument = fs.readFileSync(entryPath, "utf8").replace(/<title>[\s\S]*?<\/title>\s*/i, "");

const escapeAttribute = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escapeScript = (value) => JSON.stringify(value).replace(/</g, "\\u003c");

function buildHead(page) {
  const canonical = absoluteUrl(page.path);
  const pageSchemas = page.schema.map((schema) => `<script type="application/ld+json">${escapeScript(schema)}</script>`).join("\n    ");
  return `
    <title>${escapeAttribute(page.title)}</title>
    <meta name="description" content="${escapeAttribute(page.description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${site.name}" />
    <meta property="og:title" content="${escapeAttribute(page.title)}" />
    <meta property="og:description" content="${escapeAttribute(page.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${absoluteUrl(site.assets.hero)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttribute(page.title)}" />
    <meta name="twitter:description" content="${escapeAttribute(page.description)}" />
    ${pageSchemas}`;
}

function renderPage(pathname) {
  return renderToStaticMarkup(
    React.createElement(Router, { ssrPath: pathname }, React.createElement(App)),
  );
}

function injectDocument(page, applicationHtml) {
  const bodyWithApplication = entryDocument.replace(
    /<div id="root"><\/div>/,
    `<div id="root" data-prerendered="true">${applicationHtml}</div>`,
  );
  const head = buildHead(page);
  return bodyWithApplication.replace(/<\/head>/i, `${head}\n  </head>`);
}

for (const page of staticPages) {
  const outputDirectory = page.path === "/" ? outputRoot : path.join(outputRoot, page.path.slice(1));
  fs.mkdirSync(outputDirectory, { recursive: true });
  const applicationHtml = renderPage(page.path);
  fs.writeFileSync(path.join(outputDirectory, "index.html"), injectDocument(page, applicationHtml));
}

console.log(`Prerendered ${staticPages.length} Otterfocus routes with static metadata and JSON-LD.`);
