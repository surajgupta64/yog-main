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
import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";

import DataTable from "src/components/DataTable";

const PackageMaster = () => {
    const [action, setAction] = useState(false)

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
                <CCardTitle>Package Master</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm className="mb-2">
                    <div className="d-flex justify-content-between">
                        <div></div>
                        <div>
                            <CRow>
                                <CCol>
                                    <CButton className="ms-1 mt-2" onClick={() => setAction(!action)}>Add New Package</CButton>
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
                                        label="Package Name"
                                        placeholder="Enter Package Name"
                                    />
                                    <CInputGroup>
                                        <CInputGroupText
                                            component="label"
                                            htmlFor="inputGroupSelect01"
                                        >
                                            Duration
                                        </CInputGroupText>
                                        <CFormSelect id="inputGroupSelect01">
                                            <option>Weekly Trail</option>
                                            <option value="1">Monthly</option>
                                            <option value="2">Quarterly</option>
                                            <option value="3">Half Year</option>
                                            <option value="3">Year</option>
                                        </CFormSelect>
                                    </CInputGroup>
                                    <CButton className="mt-2" onClick={() => setAction(false)}>Save</CButton>
                                </CCol>
                                <CCol>
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        label="Fees"
                                        placeholder="Enter Fees"
                                    />
                                    <CFormSwitch size="xl" label="Status" style={{ defaultChecked: 'false' }} />
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

export default PackageMaster;