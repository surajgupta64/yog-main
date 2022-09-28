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
    CFormTextarea,
    CInputGroup,
    CInputGroupText,
    CRow,
} from "@coreui/react";
import React from "react";

const EnquiryForm = () => {
    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Enquiry Form</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm>
                    <CRow>
                        <CCol lg={6} sm={12}>
                            <CCardTitle>Personal Details</CCardTitle>
                            <CRow>
                                <CCol xs={6}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Full name"
                                        placeholder="Enter Name"
                                    />
                                </CCol>
                                <CCol>
                                    <CFormInput
                                        className="mb-1"
                                        type="email"
                                        id="exampleFormControlInput1"
                                        label="Email address"
                                        placeholder="name@example.com"
                                        text="Must be 8-20 characters long."
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Currency"
                                        label="Country Code"
                                        options={[
                                            "Select Country Code",
                                            { label: "One", value: "1" },
                                            { label: "Two", value: "2" },
                                            { label: "Three", value: "3" },
                                        ]}
                                    />
                                </CCol>
                                <CCol>
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        label="Contact Number"
                                        placeholder="Enter Number"
                                    />
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Currency"
                                        label="Gander"
                                        options={[
                                            "Select Gender",
                                            { label: "Male", value: "1" },
                                            { label: "Female", value: "2" },
                                        ]}
                                    />
                                </CCol>
                                <CCol>
                                    <CFormInput
                                        className="mb-1"
                                        type="date"
                                        id="exampleFormControlInput1"
                                        label="Date of Birth"
                                        placeholder="Enter Date"
                                    />
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Area"
                                        placeholder="Enter Locality"
                                    />
                                </CCol>
                                <CCol>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="City"
                                        placeholder="Enter City"
                                    />
                                </CCol>
                            </CRow>

                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="Profession"
                                placeholder="Enter Profession"
                            />

                            <CCardTitle>Schedule enquiry follow-up</CCardTitle>
                            <CRow>
                                <CCol xs={4}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Staff Name"
                                        label="Staff Name"
                                        options={[
                                            "Select Staff Name",
                                            { label: "prabha", value: "1" },
                                            { label: "sejal", value: "2" },
                                            { label: "sonali", value: "3" },
                                        ]}
                                    />
                                </CCol>
                                <CCol xs={4}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Staff Name"
                                        label="Center Name"
                                        options={[
                                            "Select Center Name",
                                            { label: "prabha", value: "1" },
                                            { label: "sejal", value: "2" },
                                            { label: "sonali", value: "3" },
                                        ]}
                                    />
                                </CCol>
                                <CCol xs={4}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Call Status"
                                        label="Call Status"
                                        options={[
                                            "Select Call Status",
                                            { label: "Cold", value: "1" },
                                            { label: "Warm", value: "2" },
                                            { label: "Hot", value: "3" },
                                        ]}
                                    />
                                </CCol>
                            </CRow>
                            <CFormTextarea
                                id="exampleFormControlTextarea1"
                                label="Message"
                                rows="2"
                                text="Must be 8-20 words long."
                            ></CFormTextarea>
                        </CCol>

                        <CCol lg={6} sm={12}>
                            <CRow>
                                <CCardTitle>Emergency contact</CCardTitle>
                                <CCol xs={6}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Name"
                                        placeholder="Enter Name"
                                    />
                                </CCol>
                                <CCol>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Relationship"
                                        placeholder="Enter Relationship"
                                    />
                                </CCol>

                                <CCol xs={6}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Working Days"
                                        label="Country Code"
                                        options={[
                                            "Select Country Code",
                                            { label: "+91", value: "1" },
                                            { label: "Two", value: "2" },
                                            { label: "Three", value: "3" },
                                        ]}
                                    />
                                </CCol>
                                <CCol xs={6}>

                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        label="Contact Number"
                                        placeholder="Enter Number"
                                    />
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCardTitle>Lead Information</CCardTitle>
                                <CCol xs={6}>
                                    <CFormInput
                                        className="mb-1"
                                        type="date"
                                        id="exampleFormControlInput1"
                                        label="Enquiry Date"
                                        placeholder="Enter date"
                                    />
                                </CCol>

                                <CCol xs={6}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Service Name"
                                        label="Service Name"
                                        options={[
                                            "Select Service Name",
                                            { label: "Yoga", value: "1" },
                                            { label: "PT", value: "2" },
                                            { label: "TTC", value: "3" },
                                        ]}
                                    />
                                </CCol>

                                <CCol xs={6}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Customer type"
                                        label="Customer type"
                                        options={[
                                            "Select Customer type",
                                            { label: "Yoga", value: "1" },
                                            { label: "PT", value: "2" },
                                            { label: "TTC", value: "3" },
                                        ]}
                                    />
                                </CCol>
                                <CCol xs={6}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Enquiry Type"
                                        label="Enquiry Type"
                                        options={[
                                            "Select Enquiry Type",
                                            { label: "Yoga", value: "1" },
                                            { label: "PT", value: "2" },
                                            { label: "TTC", value: "3" },
                                        ]}
                                    />
                                </CCol>
                                <CInputGroup className="mt-2">
                                    <CInputGroupText className="mb-1">Date & Time</CInputGroupText>
                                    <CFormInput
                                        className="mb-1"
                                        type="date"
                                        id="exampleFormControlInput1"
                                        placeholder="Enter Number"
                                    />
                                    <CFormInput
                                        className="mb-1"
                                        type="time"
                                        id="exampleFormControlInput1"
                                        placeholder="Enter Number"
                                    />
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select"
                                        options={[
                                            "Select",
                                            { label: "Appointment", value: "1" },
                                            { label: "Trial Session", value: "2" },

                                        ]}
                                    />
                                </CInputGroup>
                            </CRow>
                        </CCol>
                    </CRow>
                    <CButton className="mt-2">Save</CButton>
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default EnquiryForm;