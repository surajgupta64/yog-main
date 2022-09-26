import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilBook,
  cilCalculator,
  cilCash,
  cilCenterFocus,
  cilChartPie,
  cilChatBubble,
  cilContact,
  cilCursor,
  cilDescription,
  cilDrop,
  cilFolderOpen,
  cilGraph,
  cilGroup,
  cilNotes,
  cilPencil,
  cilPeople,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser,
  cilWeightlifitng,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Target Dashboard',
  },
  {
    component: CNavGroup,
    name: 'Employee',
    color: '#fff',
    to: '/employee',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Employee Dashboard',
        to: '/emp-dashboard',
      },
      {
        component: CNavItem,
        name: 'Sales Target',
        to: '/employee/sales-target',
      },
      {
        component: CNavItem,
        name: 'PT Target',
        to: '/employee/pt',
      },
      {
        component: CNavItem,
        name: 'Corporate Target',
        to: '/employee/corporate-target',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Trainer',
    to: '/base',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Trainer Dashboard',
        to: '/trainer-dashboard',
      },
      {
        component: CNavItem,
        name: 'Live Class',
        to: '/base/pt',
        badge: {
          color: 'danger',
          text: 'LIVE',
        },
      },
      {
        component: CNavItem,
        name: 'All Batch',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'CRM',
  },
  {
    component: CNavGroup,
    name: 'Leads',
    to: '/leads',
    icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Enquires',
        to: '/leads/all-enquires',
      },
      {
        component: CNavItem,
        name: 'Enquiry Appointment',
        to: '/leads/enquires-appointment',
      },
      {
        component: CNavItem,
        name: 'Trial Updated',
        to: '/leads/trial-updated',
      },
      {
        component: CNavItem,
        name: 'Follow ups Scheduling',
        to: '/leads/followups-scheduling',
      },
      {
        component: CNavItem,
        name: 'Follow ups Call Report',
        to: '/leads/followups-call-report',
      },
      {
        component: CNavItem,
        name: 'Cold Enquires',
        to: '/leads/cold-enquires',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Clients',
    to: '/clients',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'Client Management',
        to: '/clients/client-management',
        items: [
          {
            component: CNavItem,
            name: 'All Clients',
            to: '/clients/client-management/all-clients',
          },
          {
            component: CNavItem,
            name: 'Active Client',
            to: '/clients/client-management/active-clients',
          },
          {
            component: CNavItem,
            name: 'Renewals Client',
            to: '/client-management/renewals-clients',
          },
          {
            component: CNavItem,
            name: 'Renewed Clients',
            to: '/client-management/renewed-clients',
          },
          {
            component: CNavItem,
            name: 'Left Clients',
            to: '/client-management/left-clients',
          },
          {
            component: CNavItem,
            name: 'Multi Service Clients',
            to: '/client-management/multi-clients',
          },
        ],
      },
      {
        component: CNavItem,
        name: 'All Service',
        to: '/clients/all-service',
      },
      {
        component: CNavItem,
        name: 'Service Calls',
        to: '/clients/service-call',
      },
      {
        component: CNavGroup,
        name: `All Service's`,
        to: '/base',
        items: [
          {
            component: CNavItem,
            name: 'Yoga Client',
            to: '/base/accordion',
          },
          {
            component: CNavItem,
            name: 'Zoomba Client',
            to: '/base/breadcrumbs',
          },
          {
            component: CNavItem,
            name: `Teacher Training Clients`,
            to: '/base/cards',
          },
          {
            component: CNavItem,
            name: 'PT Client',
            to: '/base/breadcrumbs',
          },
          {
            component: CNavItem,
            name: 'Diet Client',
            to: '/base/breadcrumbs',
          },
        ],
      },
      {
        component: CNavGroup,
        name: `Services Calls`,
        to: '/base',
        items: [
          {
            component: CNavItem,
            name: 'Welcome Calls',
            to: '/base/accordion',
          },
          {
            component: CNavItem,
            name: 'Feedback Calls',
            to: '/base/breadcrumbs',
          },
          {
            component: CNavItem,
            name: `Payment Calls`,
            to: '/base/cards',
          },
          {
            component: CNavItem,
            name: 'Irregular Member Call',
            to: '/base/breadcrumbs',
          },
          {
            component: CNavItem,
            name: 'Courtesy Calls',
            to: '/base/breadcrumbs',
          },
          {
            component: CNavItem,
            name: 'All Wishes Calls',
            to: '/base/breadcrumbs',
          },
        ],
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Courses',
    to: '/base',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Marketing',
    to: '/base',
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Fitness',
    to: '/base',
    icon: <CIcon icon={cilWeightlifitng} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'ERP',
  },
  {
    component: CNavGroup,
    name: 'Task',
    to: '/base',
    icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Inventory',
    to: '/base',
    icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Finance',
    to: '/base',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'HR Management',
    to: '/base',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Masters',
  },
  {
    component: CNavItem,
    name: 'Center Setup',
    to: '/theme/colors',
    icon: <CIcon icon={cilCenterFocus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Support',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Marketing',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Clients',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Fitness',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'HR',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Inverntory',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Finance',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Intergartions',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
