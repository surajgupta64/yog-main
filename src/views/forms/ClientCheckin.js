import { cilAccountLogout, cilCheckCircle, cilFingerprint } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardHeader, CCardText, CCol, CFormInput, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { MdDelete, MdEdit, MdMail } from 'react-icons/md'
const url = 'https://yoga-power-node-api.herokuapp.com'

const ClientCheckin = () => {
    const [attendance, setAttendance] = useState(0);
    const time = null;
    const [ctime, setDate] = useState(time);
    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;
    const [result1, setResult1] = useState([]);
    useEffect(() => {
        getEnquiry()
    }, []);

    function getEnquiry() {
        axios.get(`${url}/enquiryForm/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult1(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }



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
                Client CheckIn
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
                                            <CCardText>Client Name: sejel<br />
                                                Attendance ID: CLI044<br />
                                                Attendance Time: {ctime}</CCardText>
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


                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>Enquiry ID</CTableHeaderCell>
                            <CTableHeaderCell>Date</CTableHeaderCell>
                            <CTableHeaderCell>Time</CTableHeaderCell>
                            <CTableHeaderCell>Name</CTableHeaderCell>
                            <CTableHeaderCell>Mobile</CTableHeaderCell>
                            <CTableHeaderCell>Service</CTableHeaderCell>
                            <CTableHeaderCell>Source</CTableHeaderCell>
                            <CTableHeaderCell>Enquiry stage</CTableHeaderCell>
                            <CTableHeaderCell>Call Status</CTableHeaderCell>
                            <CTableHeaderCell>Last Call</CTableHeaderCell>
                            <CTableHeaderCell>Invoice</CTableHeaderCell>
                            <CTableHeaderCell>Assiened by</CTableHeaderCell>
                            <CTableHeaderCell>Counseller</CTableHeaderCell>
                            <CTableHeaderCell>Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {result1.map((item, index) => (
                            item.username === username && (
                                item.appointmentfor === 'Appointment' && (
                                    <CTableRow key={index}>
                                        <CTableDataCell>{index + 1}</CTableDataCell>
                                        <CTableDataCell>{item._id}</CTableDataCell>
                                        <CTableDataCell>{item.appointmentDate}</CTableDataCell>
                                        <CTableDataCell>{item.appointmentTime}</CTableDataCell>
                                        <CTableDataCell>{item.Fullname}</CTableDataCell>
                                        <CTableDataCell>{item.ContactNumber}</CTableDataCell>
                                        <CTableDataCell>{item.ServiceName}</CTableDataCell>
                                        <CTableDataCell>{item.enquirytype}</CTableDataCell>
                                        <CTableDataCell>{item.appointmentfor}</CTableDataCell>
                                        <CTableDataCell>{item.CallStatus}</CTableDataCell>
                                        <CTableDataCell>-</CTableDataCell>
                                        <CTableDataCell>-</CTableDataCell>
                                        <CTableDataCell>{item.StaffName}</CTableDataCell>
                                        <CTableDataCell><MdEdit style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteEnquiry(item._id)} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteEnquiry(item._id)} size='20px' /><BsWhatsapp style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteEnquiry(item._id)} size='20px' /> <MdMail style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteEnquiry(item._id)} size='20px' />  </CTableDataCell>
                                    </CTableRow>
                                )
                            )
                        ))}
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>
    )
}

export default ClientCheckin
