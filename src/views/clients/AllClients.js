import React from 'react'
import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CFormSelect,
    CInputGroup,
    CInputGroupText,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleBottom, cilArrowCircleTop, cilInfo } from '@coreui/icons'
import DataTable from 'src/components/DataTable'

const AllClients = () => {


    const header = [

        /* 
        value: keyword for normal value passing
        btn: keyword for button
        btn1 to btn4: keyword for component passing
        lebel: keyword for anchor tag
        Note: please don't pass empty values or perameters
        */

        { heading: 'Sr.No', value: 'id' },
        { heading: 'Member Id', value: 'id' },
        { heading: 'Assign Date & Time', value: 'date_time' },
        { heading: 'Member Name', value: 'member_name' },
        { heading: 'Mobile', value: 'mobile' },
        { heading: 'Service Name', value: 'service_name' },
        { heading: 'Service Variation Name', value: 'variation_name' },
        { heading: 'Expiry Date', value: 'expiry_date' },
        { heading: 'Info', iconBtn: cilInfo },
        { heading: 'Renew', btn: 'renew' },
    ]

    const Users = [
        {
            id: 1,
            date_time: "25-08-2022 03:00 PM",
            member_name: "Nayana Nagrecha",
            mobile: "9136123476",
            service_name: "Yoga",
            variation_name: "3 Months",
            expiry_date: "31-08-2022",
            sales_rep: "Sejal Ganatra",
            pt_trainer: "-",
            trainer: "Prabha Yadav",
            staff_name: "Sejal Ganatra",
        },
        {
            id: 2,
            date_time: "25-08-2022 03:00 PM",
            member_name: "Nayana Nagrecha",
            mobile: "9136123476",
            service_name: "Yoga",
            variation_name: "3 Months",
            expiry_date: "31-08-2022",
            sales_rep: "Sejal Ganatra",
            pt_trainer: "-",
            trainer: "Prabha Yadav",
            staff_name: "Sejal Ganatra",
        },
    ];


    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">All Clients</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow className='d-flex mb-2'>
                            <CCol lg={6} sm={6} className='mb-2'>
                                <CInputGroup style={{ height: "38px" }}>
                                    <CFormSelect
                                        id="inputGroupSelect04"
                                        aria-label="Example select with button addon"
                                    >
                                        <option>Name</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                    <CFormInput
                                        placeholder="Search"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                    <CButton type="button" color="primary">
                                        Search
                                    </CButton>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={6} sm={12}>
                                <div className='d-flex justify-content-between'>
                                    <CButtonGroup role="group" aria-label="Basic example">
                                        <CButton color="dark" variant="outline" style={{ fontSize: '13px' }}>Total Clients: 0</CButton>
                                        <CButton color="dark" variant="outline" style={{ fontSize: '13px' }}>Active Clients:0</CButton>
                                        <CButton color="dark" variant="outline" style={{ fontSize: '13px' }}>Current Renewal: 0</CButton>
                                        <CButton color="dark" variant="outline" style={{ fontSize: '13px' }}>Renewed Clients: 0</CButton>
                                        <CButton color="dark" variant="outline" style={{ fontSize: '13px' }}>Left Clients: 0</CButton>
                                    </CButtonGroup>
                                </div>
                            </CCol>
                        </CRow>
                        <CRow >
                            <CCol lg={2} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        All
                                    </CInputGroupText>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>Sep</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Service Category
                                    </CInputGroupText>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>2022</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={2} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Sub-Filter
                                    </CInputGroupText>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>2022</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={2} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Marketing
                                    </CInputGroupText>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>2022</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={3} sm={6} className='mb-2' >

                                <CButtonGroup>
                                    <CButton color="primary">
                                        <CIcon icon={cilArrowCircleBottom} />
                                        {' '}Import
                                    </CButton>
                                    <CButton color="primary">
                                        <CIcon icon={cilArrowCircleTop} />
                                        {' '}Export
                                    </CButton>
                                </CButtonGroup>
                            </CCol>
                        </CRow>
                        <CTable bordered style={{ borderColor: "#106103" }} responsive>
                            <CTableHead style={{ backgroundColor: "#106103", color: "white" }}>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Counseller</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Target</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                        Achieved/Collected
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">New Sales</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Renewals</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                        Balance Collection
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">View</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Achived %</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                    <CTableDataCell>Sejal</CTableDataCell>
                                    <CTableDataCell>10000</CTableDataCell>
                                    <CTableDataCell>10000</CTableDataCell>
                                    <CTableDataCell>5000</CTableDataCell>
                                    <CTableDataCell>2000</CTableDataCell>
                                    <CTableDataCell>3000</CTableDataCell>
                                    <CTableDataCell>View</CTableDataCell>
                                    <CTableDataCell>100%</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                    <CTableDataCell>Sejal</CTableDataCell>
                                    <CTableDataCell>10000</CTableDataCell>
                                    <CTableDataCell>10000</CTableDataCell>
                                    <CTableDataCell>5000</CTableDataCell>
                                    <CTableDataCell>2000</CTableDataCell>
                                    <CTableDataCell>3000</CTableDataCell>
                                    <CTableDataCell>View</CTableDataCell>
                                    <CTableDataCell>100%</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                    <CTableDataCell>Sejal</CTableDataCell>
                                    <CTableDataCell>10000</CTableDataCell>
                                    <CTableDataCell>10000</CTableDataCell>
                                    <CTableDataCell>5000</CTableDataCell>
                                    <CTableDataCell>2000</CTableDataCell>
                                    <CTableDataCell>3000</CTableDataCell>
                                    <CTableDataCell>View</CTableDataCell>
                                    <CTableDataCell>100%</CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable>
                        <DataTable title={'All Clients'} heading={header} data={Users} />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default AllClients
