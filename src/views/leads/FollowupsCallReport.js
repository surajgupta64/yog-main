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

const FollowupCallReport = () => {
    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">Calls Report</strong>
                    </CCardHeader>
                    <CCardBody>
                        <div className='d-flex justify-content-between mb-2'>
                            <div className='d-flex justify-content-between'>
                                <CInputGroup style={{ width: "400px", marginRight: "2px" }}>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Form
                                    </CInputGroupText>
                                    <CFormInput
                                        type="date"
                                        required
                                    /><CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        To
                                    </CInputGroupText>
                                    <CFormInput
                                        type="date"
                                        required
                                    />
                                </CInputGroup>
                                <CInputGroup style={{ width: "150px", marginRight: "2px" }}>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>All Staff</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                                <CInputGroup style={{ width: "120px", marginRight: "2px" }}>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>All Call</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                                <CButton type="button" color="primary">
                                    Go
                                </CButton>
                            </div>
                            <CCard>
                                <CCardBody style={{ padding: "5px" }}>
                                    Total Followups : 0
                                </CCardBody>
                            </CCard>
                        </div>
                        <div className='d-flex justify-content-between mb-2'>
                            <CInputGroup style={{ width: "300px" }}>
                                <CInputGroupText
                                    component="label"
                                    htmlFor="inputGroupSelect01"
                                >
                                    Communicate
                                </CInputGroupText>
                                <CFormSelect id="inputGroupSelect01">
                                    <option>All Staff</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </CFormSelect>
                            </CInputGroup>
                            <div className='d-flex justify-content-between'>
                                <CButtonGroup role="group" aria-label="Basic example">
                                    <CButton color="dark" variant="outline">Scheduled: 0</CButton>
                                    <CButton color="dark" variant="outline">Attented:0</CButton>
                                    <CButton color="dark" variant="outline">Contacted: 0</CButton>
                                    <CButton color="dark" variant="outline">Not Contacted: 0</CButton>
                                    <CButton color="dark" variant="outline">Missed: 0</CButton>
                                </CButtonGroup>
                            </div>
                        </div>
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

export default FollowupCallReport
