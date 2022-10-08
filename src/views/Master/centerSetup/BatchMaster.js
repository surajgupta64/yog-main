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
    CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import DataTable from "src/components/DataTable";

const BatchMaster = () => {
    const [action, setAction] = useState(false)
    const [service_name, setServiceName] = useState('')
    const [service_variation, setService_variation] = useState('')
    const [Batch_Duration, setBatch_Duration] = useState('')
    const [batch_timing, setBatch_timing] = useState('')
    const [status, setStatus] = useState('')

    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const username = user.user.username;
    const token = user.token;
    const [result, setResult] = useState();
    useEffect(() => {
        fetch('https://yoga-power-appv0.herokuapp.com/Batch/all', {
            method: "get",
            headers: { "Authorization": `Bearer ${token}` }
        }).then(res => res.json()).then(json => setResult(json));
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
            })
        })
    }

    const header = [

        /* 
        value: keyword for normal value passing
        btn: keyword for button
        btn1 to btn4: keyword for component passing
        lebel: keyword for anchor tag
        Note: please don't pass empty values or perameters
        */

        { heading: 'Sr. No', value: 'id' },
        { heading: 'Service Name', value: 'service_name' },
        { heading: 'Assign Date & Time', value: 'date_time' },
        { heading: 'Member Name', value: 'member_name' },
        { heading: 'Mobile', value: 'mobile' },
        { heading: 'Service Name', value: 'service_name' },
        { heading: 'Service Variation Name', value: 'variation_name' },
        { heading: 'Expiry Date', value: 'expiry_date' },
        { heading: 'Info', iconBtn: cilInfo },
        { heading: 'Renew', btn: 'renew' },
        { heading: 'Action', com: (<> <FaBeer size='20px' /></>) },
    ]

    const Users = [
        {
            id: 1,
            date_time: "25-08-2022 03:00 PM",
            member_name: "Nayana Nagrecha",
            mobile: "9136123476",
            service_name: "Yoga",
            variation_name: "3 Months",
            expiry_date: "31-08-2022",
            sales_rep: "Sejal Ganatra",
            pt_trainer: "-",
            trainer: "Prabha Yadav",
            staff_name: "Sejal Ganatra",
        },
        {
            id: 2,
            date_time: "25-08-2022 03:00 PM",
            member_name: "Nayana Nagrecha",
            mobile: "9136123476",
            service_name: "Yoga",
            variation_name: "3 Months",
            expiry_date: "31-08-2022",
            sales_rep: "Sejal Ganatra",
            pt_trainer: "-",
            trainer: "Prabha Yadav",
            staff_name: "Sejal Ganatra",
        },
    ];

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
                                <CCol>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Service"
                                        label="Service Name"
                                        value={service_name}
                                        onChange={(e) => setServiceName(e.target.value)}
                                        options={[
                                            "Select Service",
                                            { label: "Yoga", value: "1" },
                                            { label: "TTC", value: "2" },
                                        ]}
                                    />
                                    <CFormInput
                                        className="mb-1"
                                        type="time"
                                        id="exampleFormControlInput1"
                                        label="Batch Timing "
                                        value={batch_timing}
                                        onChange={(e) => setBatch_timing(e.target.value)}
                                        placeholder="Enter Batch Timing"
                                    />
                                    <CFormSwitch size="xl" className="mt-2" value={status} onChange={() => setStatus(!status)} label="Status" style={{ defaultChecked: 'false' }} />
                                    <CButton className="mt-2" onClick={saveBatch}>Save</CButton>
                                </CCol>
                                <CCol>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Service"
                                        label="Service Variation"
                                        value={service_variation}
                                        onChange={(e) => setService_variation(e.target.value)}
                                        options={[
                                            "None",
                                            { label: "Power yoga", value: "1" },
                                            { label: "TTC", value: "2" },
                                        ]}
                                    />
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Service"
                                        label="Batch Duration"
                                        value={Batch_Duration}
                                        onChange={(e) => setBatch_Duration(e.target.value)}
                                        options={[
                                            "Select Duration",
                                            { label: "30 min", value: "1" },
                                            { label: "1 hr 30 min", value: "2" },
                                            { label: "2 hr", value: "2" },
                                            { label: "2 hr 30 min", value: "2" },
                                            { label: "3 hr", value: "2" },
                                            { label: "3 hr 30 min", value: "2" },
                                        ]}
                                    />
                                </CCol>
                            </CRow>
                        </div>
                    }
                </CForm>
                <DataTable className='mt-2' heading={header} data={Users} />
            </CCardBody>
        </CCard>
    );
};

export default BatchMaster;