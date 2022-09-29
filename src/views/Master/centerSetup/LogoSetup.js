import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CForm,
    CImage,
    CRow,
} from "@coreui/react";
import React from "react";

import ProfileIcon from 'src/assets/images/avatars/profile_icon.png'

const LogoSetup = () => {
    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Logo Setup</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm>
                    <CCardTitle>Upload and Update logo </CCardTitle>
                    <CRow>
                        <CCol xs={2} className='mt-2 mb-1' >
                            <CImage className="mb-1" style={{ borderRadius: "50px" }} width={'200px'} src={ProfileIcon} />
                        </CCol>
                        <CCol xs={8} className='mt-5'>
                            <CRow>
                                <CButton className="me-3 ms-3" style={{ margin: '5px', width: '200px' }}>Upload Image</CButton>
                            </CRow>
                            <CRow>
                                <CButton className="me-3 ms-3" style={{ margin: '5px', width: '200px' }}>Capture Image</CButton>
                            </CRow>
                        </CCol>
                    </CRow>
                    <CButton className="ms-4 mt-2">Save</CButton>
                    <CButton className="mt-2 ms-2">Cancel</CButton>
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default LogoSetup;