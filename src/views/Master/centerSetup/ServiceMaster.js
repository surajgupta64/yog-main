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
} from "@coreui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";

import DataTable from "src/components/DataTable";

const ServiceMaster = () => {
    const [action, setAction] = useState(false)
    const [action1, setAction1] = useState(false)
    const [ServiceName, setServiceName] = useState("");
    const [duration, setDuration] = useState("");
    const [fees, setFees] = useState("");
    const [status, setStatus] = useState(false);
    const [myData, setMyData] = useState();
    const [isError, setIsError] = useState("");

    function saveData() {
        let data = { ServiceName, fees, duration, status }
        // console.warn(data);
        fetch("http://localhost:5000/service/create", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            // console.warn("resp",resp);;
            resp.json().then((result) => {
                console.warn("result", result)
            })
        })
    }

    // using Async Await
    const getMyPostData = async () => {
        try {
            const res = await axios.get("https://yoga-power-appv0.herokuapp.com/service/all");
            setMyData(res.data);
        } catch (error) {
            setIsError(error.message);
        }
    };

    // NOTE:  calling the function
    useEffect(() => {
        getMyPostData();
    }, []);
    console.log(myData);
    const header = [

        /* 
        value: keyword for normal value passing
        btn: keyword for button
        btn1 to btn4: keyword for component passing
        lebel: keyword for anchor tag
        Note: please don't pass empty values or perameters
        */

        { heading: 'Sr. No', value: 'id' },
        { heading: 'Service Name', value: 'mobile' },
        { heading: 'Duration', value: 'mobile' },
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
                <CCardTitle>Service Master</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm className="mb-2">
                    <div className="d-flex justify-content-between">
                        <div></div>
                        <div>
                            <CRow>
                                <CCol>
                                    <CButton className="ms-1 mt-2" onClick={() => setAction(!action)}>{action ? 'close' : 'Add New Service'}</CButton>
                                    <CButton className="ms-1 mt-2" onClick={() => setAction1(!action1)}>{action1 ? 'close' : 'Add Sub Service'}</CButton>
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
                                    <CButton className="mt-2" onClick={saveData}>Save</CButton>
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
                                        placeholder="Enter Sub Service Name"
                                    />
                                    <CInputGroup>
                                        <CInputGroupText
                                            component="label"
                                            htmlFor="inputGroupSelect01"
                                        >
                                            Duration
                                        </CInputGroupText>
                                        <CFormSelect id="inputGroupSelect01">
                                            <option>Weekly</option>
                                            <option value="1">Monthly</option>
                                            <option value="2">Quarterly</option>
                                            <option value="3">Half Year</option>
                                            <option value="3">Year</option>
                                        </CFormSelect>
                                    </CInputGroup>
                                    <CButton className="mt-2" onClick={() => setAction(false)}>Save</CButton>
                                </CCol>
                                <CCol>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Service"
                                        label="Select Service"
                                        options={[
                                            "Select Service",
                                            { label: "Yoga", value: "1" },
                                            { label: "TTC", value: "2" },
                                        ]}
                                    />
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
                                                    id="exampleFormControlInput1"
                                                    placeholder="Enter Fees"
                                                />
                                            </CInputGroup>

                                        </CCol>
                                        <CCol>
                                            <CFormSwitch size="xl" label="Status" style={{ defaultChecked: 'false' }} />
                                        </CCol>
                                    </CRow>
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

export default ServiceMaster;