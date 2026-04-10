import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { ModulesPage } from "./pages/ModulesPage";
import { FreeLabSetupPage } from "./pages/FreeLabSetupPage";
import { AnnualEventPage } from "./pages/AnnualEventPage";
import { InternshipPage } from "./pages/InternshipPage";
import { ImpactPage } from "./pages/ImpactPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { GalleryPage } from "./pages/GalleryPage";
import { JoinAsTrainerPage } from "./pages/JoinAsTrainerPage";
import { JoinAsSchoolPage } from "./pages/JoinAsSchoolPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { SuccessStoriesPage } from "./pages/SuccessStoriesPage";
import { SitemapPage } from "./pages/SitemapPage";
import { RoboticsPage } from "./pages/modules/RoboticsPage";
import { AnimationPage } from "./pages/modules/AnimationPage";
import { CodingPage } from "./pages/modules/CodingPage";
import { GameDevPage } from "./pages/modules/GameDevPage";
import { Printing3DPage } from "./pages/modules/Printing3DPage";
import { STEMPage } from "./pages/modules/STEMPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "modules",
        children: [
          { index: true, Component: ModulesPage },
          { path: "robotics", Component: RoboticsPage },
          { path: "animation", Component: AnimationPage },
          { path: "coding", Component: CodingPage },
          { path: "game-dev", Component: GameDevPage },
          { path: "3d-printing", Component: Printing3DPage },
          { path: "stem", Component: STEMPage },
        ]
      },
      { path: "free-lab-setup", Component: FreeLabSetupPage },
      { path: "annual-event", Component: AnnualEventPage },
      { path: "internship", Component: InternshipPage },
      { path: "gallery", Component: GalleryPage },
      { path: "join-as-trainer", Component: JoinAsTrainerPage },
      { path: "join-as-school", Component: JoinAsSchoolPage },
      { path: "impact", Component: ImpactPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "privacy", Component: PrivacyPolicyPage },
      { path: "terms", Component: TermsOfServicePage },
      { path: "success-stories", Component: SuccessStoriesPage },
      { path: "sitemap", Component: SitemapPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
