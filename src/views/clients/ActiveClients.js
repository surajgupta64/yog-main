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
import { cilArrowCircleBottom, cilArrowCircleTop } from '@coreui/icons'

const ActiveClients = () => {
    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">Active Clients</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow className='d-flex justify-content-center mb-2'>
                            <CCol lg={5} sm={12} className='mb-2'>
                                <CInputGroup style={{ width: "500px" }}>
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
                            <CCol lg={7} sm={12}>
                                <div className='d-flex justify-content-center'>
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
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default ActiveClients
