import React, { useEffect, useState } from 'react'
import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CFormSelect,
    CFormSwitch,
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
import axios from 'axios';
import { MdDelete } from 'react-icons/md';
const url = 'https://yoga-power-node-api.herokuapp.com'

const FollowupsCallReport = () => {
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


    function deleteEnquirys(id) {
        fetch(`${url}/enquiryForm/delete/${id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                getEnquiry()
            })
        })
    }

    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">Calls Report <span className='float-end'>Total Calls Report : 0</span></strong>
                    </CCardHeader>
                    <CCardBody>
                        <div className='d-flex justify-content-between mb-2'>
                            <CInputGroup style={{ width: "500px" }}>

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
                                <CButton type="button" color="primary">
                                    Go
                                </CButton>
                            </CInputGroup>

                        </div>
                        <CRow className='d-flex justify-content-between mb-2'>

                            <CCol lg={5} sm={6} md={6}>
                                <CInputGroup className='mb-2' >
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
                            </CCol>

                            <CCol lg={6} sm={6} md={6}>
                                <div className='d-flex justify-content-between float-end'>
                                    <CButtonGroup style={{ fontSize: '11px' }} role="group" aria-label="Basic example">
                                        <CButton style={{ fontSize: '11px' }} color="dark" variant="outline">Scheduled: 0</CButton>
                                        <CButton style={{ fontSize: '11px' }} color="dark" variant="outline">Attented: 0</CButton>
                                        <CButton style={{ fontSize: '11px' }} color="dark" variant="outline">Contacted:0</CButton>
                                        <CButton style={{ fontSize: '11px' }} color="dark" variant="outline">Not Contacted: 0</CButton>
                                        <CButton style={{ fontSize: '11px' }} color="dark" variant="outline">Missed: 0</CButton>
                                    </CButtonGroup>
                                </div>
                            </CCol>
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

                                                <CTableDataCell><CFormSwitch size="xl" style={{ cursor: 'pointer' }} id={item._id} value={item.status} checked={item.status} onChange={() => updateStatus2(item._id, !item.status)} /></CTableDataCell>
                                                <CTableDataCell> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteEnquirys(item._id)} size='20px' /> </CTableDataCell>
                                            </CTableRow>
                                        )
                                    )
                                ))}
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default FollowupsCallReport
