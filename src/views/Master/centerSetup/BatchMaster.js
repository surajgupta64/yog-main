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

const BatchMaster = () => {
    const [action, setAction] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:5000/Batch/all')
            .then((response) => {
                setData(response.data),
                    console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

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
                                    <CButton className="ms-1 mt-2" onClick={() => setAction(!action)}>Add New Batch</CButton>
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
                                        placeholder="Enter Batch Timing"
                                    />
                                    <CFormSwitch size="xl" className="mt-2" label="Status" style={{ defaultChecked: 'false' }} />
                                    <CButton className="mt-2" onClick={() => setAction(false)}>Save</CButton>
                                </CCol>
                                <CCol>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Service"
                                        label="Service Variation"
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