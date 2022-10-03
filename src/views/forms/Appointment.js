import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
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

const Appointment = () => {
    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">Appointment</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow className='d-flex justify-content-center mb-2'>
                            <CCol lg={5} sm={12} className='mb-2'>
                                <CInputGroup style={{ width: "500px" }}>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Form
                                    </CInputGroupText>
                                    <CFormInput
                                        placeholder="Search"
                                        type='date'
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        To
                                    </CInputGroupText>
                                    <CFormInput
                                        placeholder="Search"
                                        type='date'
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                    <CButton type="button" color="primary">
                                        Search
                                    </CButton>
                                </CInputGroup>
                            </CCol>
                            <CCol></CCol>
                        </CRow>

                        <CTable bordered style={{ borderColor: "#106103" }} responsive>
                            <CTableHead style={{ backgroundColor: "#106103", color: "white" }}>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Booking Date</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Staff</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Appointment Type</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Fees</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Client Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Client Number</CTableHeaderCell>
                                    <CTableHeaderCell>Comments</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Appointment Date</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                    <CTableDataCell>12-09-22</CTableDataCell>
                                    <CTableDataCell>Sonali</CTableDataCell>
                                    <CTableDataCell>trail</CTableDataCell>
                                    <CTableDataCell>200</CTableDataCell>
                                    <CTableDataCell>suraj</CTableDataCell>
                                    <CTableDataCell>7710957578</CTableDataCell>
                                    <CTableDataCell>good fees paid</CTableDataCell>
                                    <CTableDataCell>05-10-22</CTableDataCell>
                                    <CTableDataCell>Confirm(Appointment update)</CTableDataCell>
                                    <CTableDataCell>edit/delete/view profile/invoice</CTableDataCell>
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

export default Appointment
