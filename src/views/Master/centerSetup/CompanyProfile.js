import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CForm,
    CFormCheck,
    CFormInput,
    CFormSelect,
    CFormTextarea,
    CInputGroup,
    CInputGroupText,
    CRow,
} from "@coreui/react";
import React from "react";

const CompanyProfile = () => {
    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Company Profile</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm>
                    <CRow>
                        <CCol lg={6} sm={12}>
                            <CRow>
                                <CCol xs={6}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Brand Name"
                                        placeholder="Enter Brand Name"
                                    />
                                </CCol>
                                <CCol>
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        label="Brand Number"
                                        placeholder="Enter Brand Number"
                                    />
                                </CCol>
                            </CRow>

                            <CFormInput
                                className="mb-1"
                                type="email"
                                id="exampleFormControlInput1"
                                label="Email address"
                                placeholder="name@example.com"
                                text="Must be 8-20 characters long."
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                            <CRow>
                                <CCol>
                                    <label className="mb-2">Area Sequer Fit:</label>
                                    <CInputGroup>
                                        <CFormInput type="number" placeholder="Sqft" />
                                        <CInputGroupText>sq. ft.</CInputGroupText>
                                    </CInputGroup>
                                </CCol>
                                <CCol>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Currency"
                                        label="Currency"
                                        options={[
                                            "Select Currency",
                                            { label: "One", value: "1" },
                                            { label: "Two", value: "2" },
                                            { label: "Three", value: "3" },
                                        ]}
                                    />
                                </CCol>
                            </CRow>
                            <label>Business Category</label>
                            <CInputGroup className="mb-1">
                                <CFormCheck inline id="inlineCheckbox1" value="option1" label="1" />
                                <CFormCheck inline id="inlineCheckbox2" value="option2" label="2" />
                                <CFormCheck inline id="inlineCheckbox3" value="option3" label="3" />
                            </CInputGroup>
                            <CFormTextarea
                                id="exampleFormControlTextarea1"
                                label="Branch Full Address"
                                rows="3"
                                text="Must be 8-20 words long."
                            ></CFormTextarea>
                            <CRow>
                                <CCol xs={6}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select City"
                                        label="City"
                                        options={[
                                            "Select City",
                                            { label: "One", value: "1" },
                                            { label: "Two", value: "2" },
                                            { label: "Three", value: "3" },
                                        ]}
                                    />
                                </CCol>
                                <CCol>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Country Name"
                                        label="Country Name"
                                        options={[
                                            "Select Country",
                                            { label: "One", value: "1" },
                                            { label: "Two", value: "2" },
                                            { label: "Three", value: "3" },
                                        ]}
                                    />
                                </CCol>
                            </CRow>
                        </CCol>

                        <CCol lg={6} sm={12}>
                            <CRow>
                                <CCol xs={6}>
                                    <CFormInput
                                        className="mb-1"
                                        type="time"
                                        id="exampleFormControlInput1"
                                        label="Opening Time"
                                        placeholder="Enter Brand Name"
                                    />
                                </CCol>
                                <CCol>
                                    <CFormInput
                                        className="mb-1"
                                        type="time"
                                        id="exampleFormControlInput1"
                                        label="Closing Time"
                                        placeholder="Enter Brand Number"
                                    />
                                </CCol>

                                <CCol xs={4}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Working Days"
                                        label="Working Days"
                                        options={[
                                            "Select Working Days",
                                            { label: "One", value: "1" },
                                            { label: "Two", value: "2" },
                                            { label: "Three", value: "3" },
                                        ]}
                                    />
                                </CCol>
                                <CCol xs={4}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Half Day"
                                        label="Half Day"
                                        options={[
                                            "Select Half Day",
                                            { label: "One", value: "1" },
                                            { label: "Two", value: "2" },
                                            { label: "Three", value: "3" },
                                        ]}
                                    />
                                </CCol>
                                <CCol xs={4}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Holidays"
                                        label="Holidays"
                                        options={[
                                            "Select Holidays",
                                            { label: "One", value: "1" },
                                            { label: "Two", value: "2" },
                                            { label: "Three", value: "3" },
                                        ]}
                                    />
                                </CCol>
                            </CRow>
                        </CCol>
                    </CRow>
                    <CButton className="ms-1 mt-2">Save</CButton>
                    <CButton className="ms-2 mt-2">Cancel</CButton>
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default CompanyProfile;