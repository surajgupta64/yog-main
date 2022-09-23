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

const AllEnquires = () => {
    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">All Enquires</strong>
                    </CCardHeader>
                    <CCardBody>
                        <div className='d-flex justify-content-between mb-2'>
                            <CInputGroup style={{ width: "200px" }}>
                                <CFormSelect
                                    id="inputGroupSelect04"
                                    aria-label="Example select with button addon"
                                >
                                    <option>Today</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </CFormSelect>
                                <CButton type="button" color="primary">
                                    Go
                                </CButton>
                            </CInputGroup>
                            <CCard>
                                <CCardBody style={{ padding: "5px" }}>
                                    Total Member : 0
                                </CCardBody>
                            </CCard>
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
                        </div>
                        <div className='d-flex justify-content-between mb-2'>
                            <CCard>
                                <CCardHeader className='d-flex justify-content-center'>
                                    Enquiries
                                </CCardHeader>
                                <CCardBody className='d-flex justify-content-around'>
                                    <CCard style={{ margin: "2px" }}>
                                        <CCardBody style={{ padding: "5px" }}>
                                            Enquiries: 0
                                        </CCardBody>
                                    </CCard>
                                    <CCard style={{ margin: "2px" }}>
                                        <CCardBody style={{ padding: "5px" }}>
                                            Converted: 0
                                        </CCardBody>
                                    </CCard>
                                    <CCard style={{ margin: "2px" }}>
                                        <CCardBody style={{ padding: "5px" }}>
                                            Archived/Lost: 0
                                        </CCardBody>
                                    </CCard>
                                </CCardBody>
                            </CCard>
                            <CCard>
                                <CCardHeader className='d-flex justify-content-center'>
                                    Follow Up
                                </CCardHeader>
                                <CCardBody className='d-flex justify-content-around'>
                                    <CCard style={{ margin: "2px" }}>
                                        <CCardBody style={{ padding: "5px" }}>
                                            FollowUps: 0
                                        </CCardBody>
                                    </CCard>
                                    <CCard style={{ margin: "2px" }}>
                                        <CCardBody style={{ padding: "5px" }}>
                                            Trails: 0
                                        </CCardBody>
                                    </CCard>
                                    <CCard style={{ margin: "2px" }}>
                                        <CCardBody style={{ padding: "5px" }}>
                                            Post Trails: 0
                                        </CCardBody>
                                    </CCard>
                                    <CCard style={{ margin: "2px" }}>
                                        <CCardBody style={{ padding: "5px" }}>
                                            Sales: 0
                                        </CCardBody>
                                    </CCard>
                                </CCardBody>
                            </CCard>
                            <CCard>
                                <CCardHeader className='d-flex justify-content-center'>
                                    Trials
                                </CCardHeader>
                                <CCardBody className='d-flex justify-content-around'>
                                    <CCard style={{ margin: "2px" }}>
                                        <CCardBody style={{ padding: "5px" }}>
                                            Trial Scheduled: 0
                                        </CCardBody>
                                    </CCard>
                                    <CCard style={{ margin: "2px" }}>
                                        <CCardBody style={{ padding: "5px" }}>
                                            Trial Completed: 0
                                        </CCardBody>
                                    </CCard>
                                    <CCard style={{ margin: "2px" }}>
                                        <CCardBody style={{ padding: "5px" }}>
                                            Converted: 0
                                        </CCardBody>
                                    </CCard>
                                </CCardBody>
                            </CCard>
                        </div>
                        <CRow className='mb-3'>
                            <CCol xs={2}>
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
                            <CCol xs={3}>
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
                            <CCol xs={3}>
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
                            <CCol xs={3}>
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

export default AllEnquires
