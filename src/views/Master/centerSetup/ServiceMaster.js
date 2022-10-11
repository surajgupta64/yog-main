import { cilInfo } from "@coreui/icons";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CForm,
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
} from "@coreui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBeer, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import DataTable from "src/components/DataTable";

const ServiceMaster = () => {
    const [action, setAction] = useState(false)
    const [action1, setAction1] = useState(false)
    const [ServiceName, setServiceName] = useState("");
    const [sub_Service_Name, setSub_Service_Name] = useState("");
    const [selected_service, setSelected_service] = useState("");
    const [duration, setDuration] = useState("");
    const [fees, setFees] = useState("");
    const [status, setStatus] = useState(false);
    const [updateStatus, setUpdateStatus] = useState(false);



    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const [result, setResult] = useState([]);
    useEffect(() => {
        axios.get('https://yoga-power-appv0.herokuapp.com/service/all', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setResult(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);
    console.log(result);

    const [result1, setResult1] = useState([]);
    useEffect(() => {
        axios.get('https://yoga-power-appv0.herokuapp.com/subservice/all', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setResult1(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);
    console.log(result);
    const saveService = () => {
        let data = { ServiceName, fees, duration, status }
        // console.warn(data);
        fetch("https://yoga-power-appv0.herokuapp.com/service/create", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            // console.warn("resp",resp);;
            resp.json().then(() => {
                alert("successfully submitted")
                setServiceName('')
                setFees("")
                setDuration('')
                setStatus(false)
            })
        })
    }


    const saveSubservice = () => {
        let data = { sub_Service_Name, selected_service, fees, duration, status }
        // console.warn(data);
        fetch("https://yoga-power-appv0.herokuapp.com/subservice/create", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            // console.warn("resp",resp);;
            resp.json().then(() => {
                alert("successfully submitted")
                setServiceName('')
                setSelected_service('')
                setFees("")
                setDuration('')
                setStatus(false)
            })
        })
    }

    const updateSwitch = (e) => {
        let data = { updateStatus }
        fetch(`https://yoga-power-appv0.herokuapp.com/service/update/${e}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            // console.warn("resp",resp);;
            resp.json().then(() => {
                alert("successfully submitted")
            })
        })
    }/* 
    const updateUser = (e) => {
        let item = { name, mobile, email }
        console.warn("item", item)
        fetch(`http://localhost:4000/todo/${userId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                getUsers()
            })
        })
    } */

    const serviceClose1 = () => {
        setAction(!action)
        setAction1(false)
        setServiceName('')
        setSelected_service('')
        setFees("")
        setDuration('')
        setStatus(false)
    }
    const subserviceClose = () => {
        setAction1(!action1)
        setAction(false)
        setSub_Service_Name('')
        setServiceName('')
        setSelected_service('')
        setFees("")
        setDuration('')
        setStatus(false)
    }

    const header = [

        /* 
        value: keyword for normal value passing
        btn: keyword for button
        btn1 to btn4: keyword for component passing
        lebel: keyword for anchor tag
        Note: please don't pass empty values or perameters
        */

        { heading: 'Sr. No', value: 'sr' },
        { heading: 'Service Name', value: 'ServiceName' },
        { heading: 'Duration', value: 'duration' },
        { heading: 'Fees', value: 'fees' },
        { heading: 'Status', Btn: 'switch', },//switchValue: 'status', change: updateSwitch
        { heading: 'Action', com: (<> <FaEdit style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /> </>) },
    ]

    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Service Master</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm className="mb-2">
                    <div className="d-flex justify-content-between">
                        <div></div>
                        <div>
                            <CRow>
                                <CCol>
                                    <CButton className="ms-1 mt-2" onClick={serviceClose1}>{action ? 'close' : 'Add New Service'}</CButton>
                                    <CButton className="ms-1 mt-2" onClick={subserviceClose}>{action1 ? 'close' : 'Add Sub Service'}</CButton>
                                </CCol>
                            </CRow>
                        </div>
                    </div>
                    {action &&
                        <div>
                            <CRow className='mt-3'>
                                <CCol>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Service Name"
                                        value={ServiceName}
                                        onChange={(e) => setServiceName(e.target.value)}
                                        placeholder="Enter Service Name"
                                    />
                                    <CInputGroup>
                                        <CInputGroupText
                                            component="label"
                                            htmlFor="inputGroupSelect01"
                                        >
                                            Duration
                                        </CInputGroupText>
                                        <CFormSelect id="inputGroupSelect01"
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}>
                                            <option>Weekly Trail</option>
                                            <option value="1">Monthly</option>
                                            <option value="2">Quarterly</option>
                                            <option value="3">Half Year</option>
                                            <option value="3">Year</option>
                                            <option value="3">None</option>

                                        </CFormSelect>
                                    </CInputGroup>
                                    <CButton className="mt-2" onClick={saveService}>Save</CButton>
                                </CCol>
                                <CCol>
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        label="Fees"
                                        value={fees}
                                        onChange={(e) => setFees(e.target.value)}
                                        placeholder="Enter Fees"
                                    />
                                    <CFormSwitch size="xl" label="Status" style={{ defaultChecked: 'false' }} value={status} onClick={() => setStatus(!status)} />
                                </CCol>
                            </CRow>
                        </div>
                    }
                    {action1 &&
                        <div>
                            <CRow className='mt-3'>
                                <CCol>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Sub Service Name"
                                        value={sub_Service_Name}
                                        onChange={(e) => setSub_Service_Name(e.target.value)}
                                        placeholder="Enter Sub Service Name"
                                    />
                                    <CInputGroup>
                                        <CInputGroupText
                                            component="label"
                                            htmlFor="inputGroupSelect01"
                                        >
                                            Duration
                                        </CInputGroupText>
                                        <CFormSelect id="inputGroupSelect01"
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}>
                                            <option value='Weekly'>Weekly</option>
                                            <option value='Monthly'>Monthly</option>
                                            <option value="Quarterly">Quarterly</option>
                                            <option value="Half Year">Half Year</option>
                                            <option value="Year">Year</option>
                                        </CFormSelect>
                                    </CInputGroup>
                                    <CButton className="mt-2" onClick={saveSubservice}>Save</CButton>
                                </CCol>
                                <CCol>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Service"
                                        label="Select Service"
                                        value={selected_service}
                                        onChange={(e) => setSelected_service(e.target.value)}>
                                        <option>yoga</option>
                                        {result.map((item, index) => (
                                            <option key={index} value={item.ServiceName}>{item.ServiceName}</option>
                                        ))}
                                    </CFormSelect>
                                    <CRow>
                                        <CCol>

                                            <CInputGroup>
                                                <CInputGroupText
                                                    component="label"

                                                    className="mb-1"
                                                    htmlFor="inputGroupSelect01"
                                                >
                                                    Fees
                                                </CInputGroupText>
                                                <CFormInput
                                                    className="mb-1"
                                                    type="number"
                                                    value={fees}
                                                    onChange={(e) => setFees(e.target.value)}
                                                    id="exampleFormControlInput1"
                                                    placeholder="Enter Fees"
                                                />
                                            </CInputGroup>

                                        </CCol>
                                        <CCol>
                                            <CFormSwitch size="xl" label="Status" value={status} onChange={() => setStatus(!status)} style={{ defaultChecked: 'false' }} />
                                        </CCol>
                                    </CRow>
                                </CCol>
                            </CRow>
                        </div>
                    }
                </CForm>
                <DataTable className='mt-2' heading={header} data={result} />


                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>Sub Service Name</CTableHeaderCell>
                            <CTableHeaderCell>Service Name</CTableHeaderCell>
                            <CTableHeaderCell>Duration</CTableHeaderCell>
                            <CTableHeaderCell>Fees</CTableHeaderCell>
                            <CTableHeaderCell>Status</CTableHeaderCell>
                            <CTableHeaderCell>Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {result1.map((item, index) => (
                            <CTableRow key={index}>
                                <CTableDataCell>{index + 1}</CTableDataCell>
                                <CTableDataCell>{item.sub_Service_Name}</CTableDataCell>
                                <CTableDataCell>{item.selected_service}</CTableDataCell>
                                <CTableDataCell>{item.duration}</CTableDataCell>
                                <CTableDataCell>{item.fees}</CTableDataCell>
                                <CTableDataCell><CFormSwitch size="xl" style={{ cursor: 'pointer' }} value={item.status} checked={item.status} onChange={(e) => setUpdateStatus(!item.status)} /></CTableDataCell>
                                <CTableDataCell> <FaEdit style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /> </CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>
    );
};

export default ServiceMaster;