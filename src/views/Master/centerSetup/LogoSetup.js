import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CForm,
    CFormInput,
    CImage,
    CInputGroup,
    CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileIcon from 'src/assets/images/avatars/profile_icon.png'
const url = 'http://localhost:5000'

const LogoSetup = () => {
    const [logoImage, setImage] = useState()
    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    console.log(username);
    const [result, setResult] = useState(null);
    useEffect(() => {
        fetch('https://yoga-power-appv0.herokuapp.com/brandlogoupdate/all', {
            method: "get",
            headers: { "Authorization": `Bearer ${token}` }
        }).then(res => res.json()).then(json => setResult(json));
    }, []);

    const saveLogo = () => {
        let data = { username, logoImage }
        // console.warn(data);
        fetch(`${url}/create`, {
            method: "POST",
            headers: { "Authorization": `Bearer ${token}` },
            body: JSON.stringify(data)
        }).then((resp) => {
            // console.warn("resp",resp);;
            resp.json().then(() => {
                alert("successfully submitted")
                navigate('/master/center-setup')
            })
        })
    }

    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Logo Setup</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm>
                    <CCardTitle>Upload and Update logo </CCardTitle>
                    <CRow>
                        <CCol lg={2} md={3} className='mt-2 mb-1' >
                            <CImage className="mb-1" style={{ borderRadius: "50px" }} width={'200px'} src={ProfileIcon} />
                        </CCol>
                        <CCol lg={8} md={8} className='mt-5'>
                            <CRow>
                                <CInputGroup className="mb-4">
                                    <CFormInput
                                        type="file"
                                        value={logoImage}
                                        onChange={(e) => setImage(e.target.value)}
                                        autoComplete="image"
                                    />
                                </CInputGroup>
                            </CRow>

                            <CButton className="ms-1 mt-2" onClick={saveLogo}>Save</CButton>
                            <CButton className="mt-2 ms-2" onClick={() => navigate('/master/center-setup')} >Cancel</CButton>

                        </CCol>
                    </CRow>
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default LogoSetup;