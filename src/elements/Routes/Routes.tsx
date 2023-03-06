import React from "react";
// import { Routes as Switch, Route } from "react-router-dom";
import { Routes as Switch, Route } from "react-router-dom";
import InvestorLogin from "../InvestorLogin/InvestorLogin";
import InvestorRegister from "../InvestorRegister/InvestorRegister";
import InvestorSetPassword from "../InvestorSetPassword/index";
import SetPassword from "../SetPassword/index";
import Home from "../Pages/Home";
// import Login from "../Pages/Login";
import Support from "../Pages/Support";
import Profile from "../Profile";
import TopStartUpPage from "../TopStartUpPage/TopStartUpPage";
import { RegisterMain } from "../RegisterMain/RegisterMain";
import DashBoard from "../DashBoard";
import NetWork from "../NetWork";
import NetWorkStartup from "../StartupComponents/Network-Startup";
import { Pricing } from "../Pricing-Homepage/Pricing";
import ChangePassword from "../ChangePassword";
import TrendingStoryView from "../TrendingStoryView";
import TermsOfUse from "../TermsOfUse";
import PrivacyPolicy from "../PrivacyPolicy";
import EditStartupProfile from "../EditStartupProfile";
import EditProfile from "../Profile/EditProfile";
import StartupRegister from "../StartupRegister";
import CompanyProfile from "../CompanyProfile";
import CompanyProfileStartup from "../StartupComponents/ProfilePage/CompanyProfile";
import StartupLogin from "../StartupLogin";
import { MenuDetails } from "../CompanyProfile/UI/MenuDetails";
import { StartupCardHome } from "../Pages/StartupHomePage/StartupHomePage";
import { PricingInvestor } from "../Pricing-Homepage/PricingInvestor";
import UserCard from "../StartupComponents/UserCard/UserCard";
import NotificationList from "../StartupComponents/NotificationList/NotificationList";
import data from "../StartupComponents/NotificationList/NotificationListArray";
import NotificationCard from "../StartupComponents/NotificationList/NotificationCard/NotificationCard";
import UserProfile from "../StartupComponents/UserProfilePage";
import StartupDashboard from "../Pages/SartupDashboard/StartupDashboard";
import ViewRecommendation from "../StartupComponents/ViewRecommendation/ViewRecommendation";
import ViewNearYou from "../StartupComponents/ViewNearYou/ViewNearYou";
import ViewTopRising from "../StartupComponents/ViewTopRising/ViewTopRising";
import ViewRecentlyViewed from "../StartupComponents/ViewRecentlyViewed/ViewRecentlyViewed";
import EditProfileCard from "../EditStartupProfile/EditComponent/EditProfileCard/EditProfileCard";
import EditProfilePeople from "../EditStartupProfile/EditComponent/EditProfilePeople/EditProfilePeople";
import RequestList from "../NetWork/UI/RequestList";
import GoogleSlider from "../GoogleSlider/GoogleSlider";
import FilterButton from "../DashBoard/UI/SearchBox/Buttons/FilterButton";
import SearchResult from "../DashBoard/UI/SearchBox/SearchResult/SearchResult";
import EditCompanyProfile from "../Pages/EditCompanyProfile/EditCompanyProfile";
import ViewSearchResult from "../StartupComponents/ViewSearchResult/ViewSearchResult";
import ChatComponent from "../ChatComponent/ChatComponent";
import { Chat } from "../Chat/Chat";
import { ViewRecommendedI } from "../DashBoard/UI/DashboardMenu/View/ViewRecommendedI";
import { ViewNearYouInv } from "../DashBoard/UI/DashboardMenu/View/ViewNearYouInv";
import { ViewTopRisingInv } from "../DashBoard/UI/DashboardMenu/View/ViewTopRisingInv";
import { ViewRecentlyViewedInv } from "../DashBoard/UI/DashboardMenu/View/ViewRecentlyViewedInv";
// import Navbar from "../Navbar-PostLogin/Navbar";

const Routes: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/google-slider" element={<GoogleSlider />} />
        <Route path="/login" element={<InvestorLogin />} />
        <Route path="/support" element={<Support />} />
        <Route path="/register" element={<RegisterMain />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        {/* <Route path="/startup-register" element={<StartupRegister />} /> */}
        <Route path="/startup-login" element={<StartupLogin />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/network" element={<NetWork />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/trending-story-view" element={<TrendingStoryView />} />
        <Route path="/term-of-use" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pricing-investor" element={<PricingInvestor />} />
        <Route path="/request-list" element={<RequestList />} />
        <Route
          path="/view-recommedned-investor"
          element={<ViewRecommendedI />}
        />
        <Route path="/view-nearyou-investor" element={<ViewNearYouInv />} />
        <Route path="/view-toprising-investor" element={<ViewTopRisingInv />} />
        <Route
          path="/view-recently-investor"
          element={<ViewRecentlyViewedInv />}
        />
        TermsOfUse TermsOfUse
        {/* Testing TOP STARTUP */}
        <Route path="/topstartup" element={<TopStartUpPage />} />
        <Route path="/investor-register" element={<InvestorRegister />} />
        <Route path="/edit-profile-startup" element={<EditStartupProfile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        {/* Testing TOP STARTUP */}
        <Route path="/topstartup" element={<TopStartUpPage />} />
        <Route path="/investor-register" element={<InvestorRegister />} />
        <Route path="/startup-register" element={<StartupRegister />} />
        <Route path="/profile-card" element={<StartupCardHome />} />
        <Route path="/user-card" element={<UserCard />} />
        <Route path="/notificationcard" element={<NotificationCard />} />
        {/* Startup Section */}
        <Route path="/startup-network" element={<NetWorkStartup />} />
        <Route path="/startup-profile" element={<CompanyProfileStartup />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/startup-dashboard" element={<StartupDashboard />} />
        <Route path="/view-recommendation" element={<ViewRecommendation />} />
        <Route path="/view-near-you" element={<ViewNearYou />} />
        <Route path="/view-top-rising" element={<ViewTopRising />} />
        <Route path="/view-recently-viewed" element={<ViewRecentlyViewed />} />
        <Route path="/editpeople" element={<EditProfilePeople />} />
        <Route path="/set-password-startup" element={<SetPassword />} />
        <Route path="/btn-test" element={<FilterButton />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/edit-company-profile" element={<EditCompanyProfile />} />
        <Route path="/search-result-startup" element={<ViewSearchResult />} />
        <Route path="/chat-component" element={<ChatComponent />} />
        <Route path="/chat" element={<Chat />} />
      </Switch>
    </div>
  );
};

export default Routes;
