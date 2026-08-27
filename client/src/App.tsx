/**
 * Quiet Terrain application shell: a focused public portfolio route map with no dashboard
 * patterns, keeping every page within one cohesive desert-editorial visual language.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Inquire from "./pages/Inquire";
import Journal from "./pages/Journal";
import Nature from "./pages/Nature";
import NotFound from "./pages/NotFound";
import Prints from "./pages/Prints";
import Pricing from "./pages/Pricing";
import SelectedWork from "./pages/SelectedWork";
import WeddingsEvents from "./pages/WeddingsEvents";

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/about" component={About} /><Route path="/weddings-events" component={WeddingsEvents} /><Route path="/nature" component={Nature} /><Route path="/selected-work" component={SelectedWork} /><Route path="/prints" component={Prints} /><Route path="/pricing" component={Pricing} /><Route path="/faq" component={Faq} /><Route path="/inquire" component={Inquire} /><Route path="/journal" component={Journal} /><Route component={NotFound} /></Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster richColors position="bottom-center" /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
