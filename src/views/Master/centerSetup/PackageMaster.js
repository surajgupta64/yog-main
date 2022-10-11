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
    const [fees, setFees] = useState("");
    const [status, setStatus] = useState(false);
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [select, setSelect] = useState("");
    const [duration, setDuration] = useState("");

    const durationSet = (e) => {
        if (e.target.id === 'day') {
            setDay(e.target.value)
        } else if (e.target.id === 'month') {
            setMonth(e.target.value)
        } else if (e.target.id === 'select') {
            setSelect(e.target.value)
        }
        setDuration(day + " " + month + " " + select)
    }

    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    console.log(duration);
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
        setDuration(day + month + select)
        console.log(duration);
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
                                    <CInputGroup
                                        value={duration}
                                        onChange={(e) => setDuration(day + month + select)}
                                    >
                                        <CInputGroupText
                                            component="label"
                                            htmlFor="inputGroupSelect01"
                                        >
                                            Duration
                                        </CInputGroupText>
                                        <CFormSelect id="day"
                                            value={day}
                                            onChange={durationSet}>
                                            <option value="">Select</option>
                                            <option value='1 Day per week'>1 Day per week</option>
                                            <option value='2 Day per week'>2 Day per week</option>
                                            <option value='3 Day per week'>3 Day per week</option>
                                            <option value='4 Day per week'>4 Day per week</option>
                                            <option value='5 Day per week'>5 Day per week</option>
                                            <option value='6 Day per week'>6 Day per week</option>
                                            <option value='7 Day per week'>7 Day per week</option>
                                        </CFormSelect>
                                        <CFormSelect id="month"
                                            value={month}
                                            onChange={durationSet}>
                                            <option value="">Select</option>
                                            <option value=' 1 '>1</option>
                                            <option value=" 2 ">2</option>
                                            <option value=" 3 ">3</option>
                                            <option value=" 4 ">4</option>
                                            <option value=" 5 ">5</option>
                                            <option value=" 6 ">6</option>
                                            <option value=" 7 ">7</option>
                                            <option value=" 8 ">8</option>
                                            <option value=" 9 ">9</option>
                                            <option value=" 10 ">10</option>
                                            <option value=" 11 ">11</option>
                                            <option value=" 12 ">12</option>
                                            <option value=" 13 ">13</option>
                                            <option value=" 14 ">14</option>
                                            <option value=" 15 ">15</option>
                                            <option value=" 16 ">16</option>
                                            <option value=" 17 ">17</option>
                                            <option value=" 18 ">18</option>
                                        </CFormSelect>
                                        <CFormSelect id="select"
                                            value={select}
                                            onChange={durationSet}>
                                            <option value="">Select</option>
                                            <option value='Week'>Week</option>
                                            <option value="Month">Month</option>
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