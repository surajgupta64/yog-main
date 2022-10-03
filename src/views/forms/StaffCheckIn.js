import { cilAccountLogout, cilCheckCircle, cilFingerprint } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardHeader, CCardText, CCol, CFormInput, CRow } from '@coreui/react'
import React, { useState } from 'react'

const StaffCheckIn = () => {
    const [attendance, setAttendance] = useState(0);
    const time = null;
    const [ctime, setDate] = useState(time);

    const handelTime = () => {
        let time = new Date().toLocaleTimeString();
        setDate(time);
    }

    const submitBtn = () => {
        setAttendance(attendance + 1)
    }
    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                Staff CheckIn
            </CCardHeader>
            <CCardBody>
                <CRow>
                    <CCol lg={4}>
                        <CCard>
                            <CCardBody>
                                <CRow>
                                    <CCol xs={5}>
                                        <CIcon icon={cilFingerprint} size="8xl" />
                                    </CCol>
                                    <CCol className='mt-4'>
                                        <CFormInput
                                            type="text"
                                            label='Attendance ID'
                                            placeholder="Enter Attendance ID"
                                        />
                                    </CCol>
                                </CRow>
                                <CButton className='mt-1 float-end' onClick={submitBtn}>Submit</CButton>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    {attendance >= 1 &&

                        <CCol lg={4}>
                            <CCard>
                                <CCardBody>
                                    <CRow>
                                        <CCol xs={5}>

                                            <CIcon icon={cilCheckCircle} size="8xl" />
                                        </CCol>
                                        <CCol className='mt-3'>
                                            <CCardText>Staff Name: sejel<br />
                                                EMP ID: CLI044<br />
                                                CheckIn Time: {ctime}</CCardText>
                                        </CCol>
                                    </CRow>
                                    {ctime == null &&
                                        <CButton className='mt-1 float-end' onClick={handelTime}>Check In</CButton>
                                    }
                                    {ctime != null &&
                                        <CButton color='danger' className='mt-1 float-end' onClick={submitBtn}>Check Out</CButton>
                                    }
                                </CCardBody>
                            </CCard>
                        </CCol>
                    }
                    {attendance === 2 &&
                        <CCol lg={4}>
                            <CCard>
                                <CCardBody>
                                    <CRow>
                                        <CCol xs={5} className='mt-2'>
                                            <CIcon icon={cilAccountLogout} size="7xl" />
                                        </CCol>
                                        <CCol className='mt-3'>
                                            <CCardText>Client Name: sejel<br />
                                                Attendance ID: CLI044<br />
                                                Attendance Time: {ctime}</CCardText>
                                        </CCol>
                                    </CRow>
                                    {ctime != null &&
                                        <CButton className='mt-1 float-end' onClick={() => setAttendance(0)}>Done !</CButton>
                                    }
                                </CCardBody>
                            </CCard>
                        </CCol>
                    }
                </CRow>
            </CCardBody>
        </CCard>
    )
}

export default StaffCheckIn
