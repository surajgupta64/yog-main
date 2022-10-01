import { cilCheckCircle, cilFingerprint } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CFormInput, CFormSelect, CInputGroup, CInputGroupText, CRow } from '@coreui/react'
import React from 'react'

const ClientCheckin = () => {
    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                Client CheckIn
            </CCardHeader>
            <CCardBody>
                <CRow>
                    <CCol lg={4}>
                        <CCard>
                            <CCardBody>
                                <CIcon icon={cilFingerprint} size="8xl" />
                                <CInputGroup>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Attendance ID
                                    </CInputGroupText>
                                    <CFormInput
                                        type="text"
                                        placeholder="Enter Attendance ID"
                                    />
                                </CInputGroup>
                                <CButton className='mt-1'>Submit</CButton>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol lg={4}>
                        <CCard>
                            <CCardBody>
                                <CIcon icon={cilCheckCircle} size="8xl" />

                                <CButton className='mt-1'>Submit</CButton>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol></CCol>
                </CRow>
            </CCardBody>
        </CCard>
    )
}

export default ClientCheckin
