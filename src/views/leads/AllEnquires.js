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
import CIcon from '@coreui/icons-react'
import { cilArrowCircleBottom, cilArrowCircleTop } from '@coreui/icons'
import axios from 'axios'
import { MdCall, MdDelete, MdEdit, MdMail } from 'react-icons/md'
import { BsPhone, BsPlus, BsPlusCircle, BsWhatsapp } from 'react-icons/bs'
import EnquiryForm from '../forms/EnquiryForm'
import { useNavigate } from 'react-router-dom'
import moment from 'moment/moment'
const url = 'https://yoga-power-node-api.herokuapp.com'

const AllEnquires = () => {
    const [select, setSelect] = useState()
    const [followForm, setFollowForm] = useState()


    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;
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


    function deleteEnquiry(id) {
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
                        <strong className="mt-2">All Enquires <span className='float-end'>Total Member : {result1.length}</span></strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow className='d-flex justify-content-between'>
                            <CCol lg={4} sm={6} md={6}>
                                <CInputGroup className='mb-2'>
                                    <CFormSelect
                                        id="inputGroupSelect04"
                                        aria-label="Example select with button addon"
                                        value={select}
                                        onChange={(e) => setSelect(e.target.value)}
                                    >
                                        <option>Today</option>
                                        <option>Last Week</option>
                                        <option>Last Month</option>
                                        <option>Custom Date</option>
                                    </CFormSelect>
                                    {select === 'Custom Date' && (
                                        <CInputGroup className='mt-2 mb-2' >

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

                                    )}
                                    {select !== 'Custom Date' && (
                                        <CButton type="button" color="primary">
                                            Go
                                        </CButton>
                                    )}
                                </CInputGroup>
                            </CCol>
                            <CCol lg={6} sm={6} md={6}>
                                <CButtonGroup className=' mb-2 float-end'>
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
                        <CRow className='d-flex justify-content-between mb-2'>
                            <CCol lg={4} sm={12} md={12} className='mb-2'>
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
                            </CCol>
                            <CCol lg={4} sm={12} md={12} className='mb-2'>
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
                            </CCol>
                            <CCol lg={4} sm={12} md={12} className='mb-2'>
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
                            </CCol>
                        </CRow>
                        <CRow className='mb-3'>
                            <CCol lg={2} md={6} sm={6} className='mb-2'>
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
                            <CCol lg={3} md={6} sm={6} className='mb-2'>
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
                            <CCol lg={3} md={6} sm={6} className='mb-2'>
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
                            <CCol lg={3} md={6} sm={6} className='mb-2'>
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
                                    <CTableHeaderCell>Addmission</CTableHeaderCell>
                                    <CTableHeaderCell>Assigned by</CTableHeaderCell>
                                    <CTableHeaderCell>Counseller</CTableHeaderCell>
                                    <CTableHeaderCell>Action</CTableHeaderCell>
                                    <CTableHeaderCell>Edit</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {result1.map((item, index) => (
                                    item.username === username && (
                                        <>
                                            <CTableRow key={index}>
                                                <CTableDataCell>{index + 1}</CTableDataCell>
                                                <CTableDataCell>{centerCode}ENQ{index + 10}</CTableDataCell>
                                                <CTableDataCell className='text-center'>{moment(item.appointmentDate).format("LL")}</CTableDataCell>
                                                <CTableDataCell>{moment(item.appointmentTime, "HH:mm").format("hh:mm A")}</CTableDataCell>
                                                <CTableDataCell>{item.Fullname}</CTableDataCell>
                                                <CTableDataCell>{item.ContactNumber}</CTableDataCell>
                                                <CTableDataCell>{item.ServiceName}</CTableDataCell>
                                                <CTableDataCell>{item.enquirytype}</CTableDataCell>
                                                <CTableDataCell>{item.appointmentfor}</CTableDataCell>
                                                <CTableDataCell>{item.CallStatus}</CTableDataCell>
                                                <CTableDataCell>{item.Message}</CTableDataCell>
                                                <CTableDataCell>-</CTableDataCell>
                                                <CTableDataCell>{item.StaffName}</CTableDataCell>
                                                <CTableDataCell>-</CTableDataCell>
                                                <CTableDataCell><a href={`tel:+91${item.ContactNumber}`}><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/${item.ContactNumber}`}><BsWhatsapp style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto: ${item.Emailaddress}`}> <MdMail style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteEnquiry(item._id)} size='20px' /></a> <BsPlusCircle style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => setFollowForm(index)} /></CTableDataCell>
                                                <CTableDataCell><MdEdit style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => <EnquiryForm id={item._id} />} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteEnquiry(item._id)} size='20px' /></CTableDataCell>
                                            </CTableRow>
                                            {followForm === index &&
                                                <CCard>
                                                    <CCardBody>
                                                        hello
                                                    </CCardBody>
                                                </CCard>
                                            }
                                        </>
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

export default AllEnquires
