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
import React, { useState } from "react";
import { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const PackageMaster = () => {
    const [action, setAction] = useState(false)
    const [Package_Name, setPackageName] = useState("");
    const [duration, setDuration] = useState("");
    const [fees, setFees] = useState("");
    const [status, setStatus] = useState(false);


    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const username = user.user.username;
    const token = user.token;
    const [result, setResult] = useState([]);
    useEffect(() => {
        fetch('https://yoga-power-appv0.herokuapp.com/Package/all', {
            method: "get",
            headers: { "Authorization": `Bearer ${token}` }
        }).then(res => res.json()).then(json => setResult(json));
    }, []);

    const savePackage = () => {
        let data = { Package_Name, fees, duration, status }
        // console.warn(data);
        fetch("https://yoga-power-appv0.herokuapp.com/Package/create", {
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
                setPackageName('')
                setFees('')
                setDuration('')
                setStatus('')
            })
        })
    }


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
                                    <CButton className="ms-1 mt-2" onClick={() => setAction(!action)}>{action ? 'close' : 'Add New Package'}</CButton>
                                </CCol>
                            </CRow>
                        </div>
                    </div>
                    {action &&
                        <div>
                            <CRow className='mt-3'>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Package Name"
                                        value={Package_Name}
                                        onChange={(e) => setPackageName(e.target.value)}
                                        placeholder="Enter Package Name"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        label="Fees"
                                        value={fees}
                                        onChange={(e) => setFees(e.target.value)}
                                        placeholder="Enter Fees"
                                    />
                                </CCol>

                                <CCol lg={6} md={6} sm={12}>
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
                                            <option value="Monthly">Monthly</option>
                                            <option value="Quarterly">Quarterly</option>
                                            <option value="Half Year">Half Year</option>
                                            <option value="Year">Year</option>
                                        </CFormSelect>
                                    </CInputGroup>
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSwitch size="xl" label="Status" style={{ defaultChecked: 'false' }}
                                        value={status}
                                        onChange={() => setStatus(!status)} />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CButton className="mt-2" onClick={savePackage}>Save</CButton>
                                </CCol>



                            </CRow>
                        </div>
                    }
                </CForm>
                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>Package Name</CTableHeaderCell>
                            <CTableHeaderCell>Duration</CTableHeaderCell>
                            <CTableHeaderCell>Fees</CTableHeaderCell>
                            <CTableHeaderCell>Status</CTableHeaderCell>
                            <CTableHeaderCell>Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {result.map((item, index) => (
                            <CTableRow key={index}>
                                <CTableDataCell>{index + 1}</CTableDataCell>
                                <CTableDataCell>{item.Package_Name}</CTableDataCell>
                                <CTableDataCell>{item.duration}</CTableDataCell>
                                <CTableDataCell>{item.fees}</CTableDataCell>
                                <CTableDataCell><CFormSwitch size="xl" style={{ cursor: 'pointer' }} value={item.status} checked={item.status} onChange={(e) => setUpdateStatus(!item.status)} /></CTableDataCell>
                                <CTableDataCell> <FaEdit style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /> </CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard >
    );
};

export default PackageMaster;