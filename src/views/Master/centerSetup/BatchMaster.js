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
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const BatchMaster = () => {
    const [action, setAction] = useState(false)
    const [service_name, setServiceName] = useState('')
    const [service_variation, setService_variation] = useState('')
    const [Batch_Duration, setBatch_Duration] = useState('')
    const [batch_timing, setBatch_timing] = useState('')
    const [status, setStatus] = useState('')

    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const [result, setResult] = useState([]);
    useEffect(() => {
        fetch('https://yoga-power-appv0.herokuapp.com/Batch/all', {
            method: "get",
            headers: { "Authorization": `Bearer ${token}` }
        }).then(res => res.json()).then(json => setResult(json));
    }, []);
    const [result1, setResult1] = useState([]);
    useEffect(() => {
        fetch('https://yoga-power-appv0.herokuapp.com/service/all', {
            method: "get",
            headers: { "Authorization": `Bearer ${token}` }
        }).then(res => res.json()).then(json => setResult1(json));
    }, []);
    const [result2, setResult2] = useState([]);
    useEffect(() => {
        fetch('https://yoga-power-appv0.herokuapp.com/subservice/all', {
            method: "get",
            headers: { "Authorization": `Bearer ${token}` }
        }).then(res => res.json()).then(json => setResult2(json));
    }, []);

    const saveBatch = () => {
        let data = { service_name, service_variation, Batch_Duration, batch_timing, status }
        // console.warn(data);
        fetch("https://yoga-power-appv0.herokuapp.com/Batch/create", {
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
                setService_variation('')
                setBatch_Duration('')
                setBatch_timing('')
                setStatus(false)
            })
        })
    }

    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Batch Master</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm className="mb-2">
                    <div className="d-flex justify-content-between">
                        <div></div>
                        <div>
                            <CRow>
                                <CCol>
                                    <CButton className="ms-1 mt-2" onClick={() => setAction(!action)}>{action ? 'close' : 'Add New Batch'}</CButton>
                                </CCol>
                            </CRow>
                        </div>
                    </div>
                    {action &&
                        <div>
                            <CRow className='mt-3'>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Service"
                                        label="Service Name"
                                        value={service_name}
                                        onChange={(e) => setServiceName(e.target.value)}
                                    >
                                        {result1.map((item, index) => (
                                            <option key={index} value={item.ServiceName}>{item.ServiceName}</option>
                                        ))}
                                    </CFormSelect>
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Service"
                                        label="Service Variation"
                                        value={service_variation}
                                        onChange={(e) => setService_variation(e.target.value)}
                                    >
                                        <option value='None'>None</option>
                                        {result2.map((item, index) => (
                                            <option key={index} value={item.sub_Service_Name}>{item.sub_Service_Name}</option>
                                        ))}
                                    </CFormSelect>
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="time"
                                        id="exampleFormControlInput1"
                                        label="Batch Timing "
                                        value={batch_timing}
                                        onChange={(e) => setBatch_timing(e.target.value)}
                                        placeholder="Enter Batch Timing"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Service"
                                        label="Batch Duration"
                                        value={Batch_Duration}
                                        onChange={(e) => setBatch_Duration(e.target.value)}
                                        options={[
                                            "Select Duration",
                                            { label: "30 min", value: "30 min" },
                                            { label: "1 hr", value: "1 hr" },
                                            { label: "1 hr 30 min", value: "1 hr 30 min" },
                                            { label: "2 hr", value: "2 hr" },
                                            { label: "2 hr 30 min", value: "2 hr 30 min" },
                                            { label: "3 hr", value: "3 hr" },
                                            { label: "3 hr 30 min", value: "3 hr 30 min" },
                                        ]}
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSwitch size="xl" className="mt-2" value={status} onChange={() => setStatus(!status)} label="Status" style={{ defaultChecked: 'false' }} />
                                    <CButton className="mt-2" onClick={saveBatch}>Save</CButton>
                                </CCol>

                            </CRow>
                        </div>
                    }
                </CForm>
                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>service_name</CTableHeaderCell>
                            <CTableHeaderCell>service_variation</CTableHeaderCell>
                            <CTableHeaderCell>Batch_Duration</CTableHeaderCell>
                            <CTableHeaderCell>batch_timing</CTableHeaderCell>
                            <CTableHeaderCell>Status</CTableHeaderCell>
                            <CTableHeaderCell>Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {result.map((item, index) => (
                            <CTableRow key={index}>
                                <CTableDataCell>{index + 1}</CTableDataCell>
                                <CTableDataCell>{item.service_name}</CTableDataCell>
                                <CTableDataCell>{item.service_variation}</CTableDataCell>
                                <CTableDataCell>{item.Batch_Duration}</CTableDataCell>
                                <CTableDataCell>{item.batch_timing}</CTableDataCell>
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

export default BatchMaster;