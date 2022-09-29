import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const EmployeeDashboard = React.lazy(() => import('./views/dashboard/EmployeeDashboard'))
const TrainerDashboard = React.lazy(() => import('./views/dashboard/TrainerDashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))
//Empolyee
const PTTarget = React.lazy(() => import('./views/dashboard/PTTarget'))
const SalesTarget = React.lazy(() => import('./views/dashboard/SalesTarget'))
const CorporateTarget = React.lazy(() => import('./views/dashboard/CorporateTarget'))
//Leads
const AllEnquires = React.lazy(() => import('./views/leads/AllEnquires'))
const EnquireAppoitment = React.lazy(() => import('./views/leads/EnquireAppointment'))
const TrialUpdated = React.lazy(() => import('./views/leads/TrialEnquires'))
const FollowupScheduling = React.lazy(() => import('./views/leads/FollowupScheduling'))
const FollowupCallReport = React.lazy(() => import('./views/leads/FollowupsCallReport'))
const ColdEnquires = React.lazy(() => import('./views/leads/ColdEnquires'))

//Clients
const AllClients = React.lazy(() => import('./views/clients/AllClients'))
const ActiveClients = React.lazy(() => import('./views/clients/ActiveClients'))
const ServiceCall = React.lazy(() => import('./views/clients/serviceCall/ServiceCall'))
const AllService = React.lazy(() => import('./views/clients/allService/AllService'))
const MemberDetails = React.lazy(() => import('./views/clients/MemberDetails/MemberDetails'))

// Hr
const AllEmpProfile = React.lazy(() => import('./views/hr/AllEmpProfile'))

//Master
const CenterSetup = React.lazy(() => import('./views/Master/centerSetup/CenterSetup'))
const CompanyProfile = React.lazy(() => import('./views/Master/centerSetup/CompanyProfile'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() =>
  import('./views/base/list-groups/ListGroups')
)
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() =>
  import('./views/base/paginations/Paginations')
)
const Placeholders = React.lazy(() =>
  import('./views/base/placeholders/Placeholders')
)
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() =>
  import('./views/buttons/button-groups/ButtonGroups')
)
const Dropdowns = React.lazy(() =>
  import('./views/buttons/dropdowns/Dropdowns')
)

//Forms
const EnquiryForm = React.lazy(() => import('./views/forms/EnquiryForm'))
const ChecksRadios = React.lazy(() =>
  import('./views/forms/checks-radios/ChecksRadios')
)
const FloatingLabels = React.lazy(() =>
  import('./views/forms/floating-labels/FloatingLabels')
)
const FormControl = React.lazy(() =>
  import('./views/forms/form-control/FormControl')
)
const InputGroup = React.lazy(() =>
  import('./views/forms/input-group/InputGroup')
)
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() =>
  import('./views/forms/validation/Validation')
)

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() =>
  import('./views/icons/coreui-icons/CoreUIIcons')
)
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Login Page' },
  { path: '/login', name: 'Login', element: Login },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  {
    path: '/emp-dashboard',
    name: 'Employee Dashboard',
    element: EmployeeDashboard,
  },
  {
    path: '/trainer-dashboard',
    name: 'Trainer Dashboard',
    element: TrainerDashboard,
  },
  //Employee

  { path: '/employee', name: 'Employee', element: Tables, exact: true },
  { path: '/employee/pt', name: 'PT Target', element: PTTarget },
  {
    path: '/employee/sales-target',
    name: 'Sales Target',
    element: SalesTarget,
  },
  {
    path: '/employee/corporate-target',
    name: 'Corporate Target',
    element: CorporateTarget,
  },

  //Leads
  { path: '/leads', name: 'Leads', element: AllEnquires, exact: true },
  { path: '/leads/all-enquires', name: 'All Enquires', element: AllEnquires },
  { path: '/leads/enquires-appointment', name: 'Enquiry Appointment', element: EnquireAppoitment },
  { path: '/leads/trial-updated', name: 'Trial Updated', element: TrialUpdated },
  { path: '/leads/followups-scheduling', name: 'Follow ups Scheduling', element: FollowupScheduling },
  { path: '/leads/followups-call-report', name: 'Follow ups Call Report', element: FollowupCallReport },
  { path: '/leads/cold-enquires', name: 'Cold Enquires', element: ColdEnquires },

  //Clients
  { path: '/clients', name: 'Clients', element: ServiceCall, exact: true },
  { path: '/clients/client-management', name: 'Client Management', element: AllClients, exact: true },
  { path: '/clients/client-management/active-clients', name: 'Active Clients', element: ActiveClients },
  { path: '/clients/client-management/all-clients', name: 'All Clients', element: AllClients },
  { path: '/clients/service-call', name: 'Service Calls', element: ServiceCall },
  { path: '/clients/all-service', name: 'All Service', element: AllService },
  { path: '/clients/member-details', name: 'Member Details', element: MemberDetails },


  //Master
  { path: '/hr', name: 'HR Management', element: AllEmpProfile, exact: true },
  { path: '/hr/all-emp', name: 'All Employee Profile', element: AllEmpProfile, exact: true },

  //Master
  { path: '/master', name: 'Master', element: CenterSetup, exact: true },
  { path: '/master/center-setup', name: 'Center Setup', element: CenterSetup, exact: true },
  { path: '/master/center-setup/company-profile', name: 'Company Profile', element: CompanyProfile, exact: true },

  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  {
    path: '/buttons/button-groups',
    name: 'Button Groups',
    element: ButtonGroups,
  },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/enquiry-form', name: 'Enquiry Form', element: EnquiryForm },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  {
    path: '/forms/checks-radios',
    name: 'Checks & Radios',
    element: ChecksRadios,
  },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  {
    path: '/forms/floating-labels',
    name: 'Floating Labels',
    element: FloatingLabels,
  },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  {
    path: '/notifications',
    name: 'Notifications',
    element: Alerts,
    exact: true,
  },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
