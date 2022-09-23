import { cilArrowCircleBottom, cilArrowCircleTop } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
    CAccordion,
    CAccordionBody,
    CAccordionHeader,
    CAccordionItem,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CFormSelect,
    CInputGroup,
    CInputGroupText,
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CTabPane,
} from '@coreui/react'
import React, { useState } from 'react'

const EmployeeDashboard = () => {
    const [activeKey, setActiveKey] = useState(1)
    return (
        <CRow>
            <CCol xs={12}>
                <CCard>
                    <CCardHeader>
                        <CNav variant="pills" role="tablist">
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 1}
                                    onClick={() => setActiveKey(1)}
                                >
                                    Sales Closure
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 2}
                                    onClick={() => setActiveKey(2)}
                                >

                                    Client Closure
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 3}
                                    onClick={() => setActiveKey(3)}
                                >
                                    Lead Target
                                </CNavLink>
                            </CNavItem>
                        </CNav>
                    </CCardHeader>
                    <CCardBody>
                        <CTabContent>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown
                                aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan
                                helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh
                                mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan
                                aliquip quis cardigan american apparel, butcher voluptate nisi qui.
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
                                Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan
                                four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft
                                beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda
                                labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit
                                sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean
                                shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown,
                                tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                                Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic
                                lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork
                                tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica.
                                DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                                mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.
                                Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown.
                                Pitchfork sustainable tofu synth chambray yr.
                            </CTabPane>
                        </CTabContent>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CAccordion activeItemKey={1}>
                    <CAccordionItem itemKey={1}>
                        <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                        <CAccordionBody>
                            <CCard>
                                <CCardHeader>
                                    <CRow>
                                        <CCol xs={3}>
                                            <strong className="mt-2">PT Target</strong>
                                        </CCol>
                                        <CCol xs={2}>
                                            <CInputGroup>
                                                <CInputGroupText
                                                    component="label"
                                                    htmlFor="inputGroupSelect01"
                                                >
                                                    Month
                                                </CInputGroupText>
                                                <CFormSelect id="inputGroupSelect01">
                                                    <option>Sep</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </CFormSelect>
                                            </CInputGroup>
                                        </CCol>
                                        <CCol xs={2}>
                                            <CInputGroup>
                                                <CInputGroupText
                                                    component="label"
                                                    htmlFor="inputGroupSelect01"
                                                >
                                                    Year
                                                </CInputGroupText>
                                                <CFormSelect id="inputGroupSelect01">
                                                    <option>2022</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </CFormSelect>
                                            </CInputGroup>
                                        </CCol>
                                        <CCol xs={2}>
                                            <CInputGroup className="left">
                                                <CFormInput
                                                    placeholder="Staff Name"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="button-addon2"
                                                />
                                                <CButton type="button" color="primary" id="button-addon2">
                                                    Go
                                                </CButton>
                                            </CInputGroup>
                                        </CCol>
                                        <CCol xs={3}>
                                            <CButtonGroup>
                                                <CButton color="primary">
                                                    <CIcon icon={cilArrowCircleBottom} />
                                                    Import
                                                </CButton>
                                                <CButton color="primary">
                                                    <CIcon icon={cilArrowCircleTop} />
                                                    Export
                                                </CButton>
                                            </CButtonGroup>
                                        </CCol>
                                    </CRow>
                                </CCardHeader>
                                <CCardBody>
                                    <CTable bordered borderColor="primary" responsive>
                                        <CTableHead color="dark">
                                            <CTableRow>
                                                <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
                                                <CTableHeaderCell scope="col">Counseller</CTableHeaderCell>
                                                <CTableHeaderCell scope="col">Target</CTableHeaderCell>
                                                <CTableHeaderCell scope="col">
                                                    Achieved/Collected
                                                </CTableHeaderCell>
                                                <CTableHeaderCell scope="col">New Sales</CTableHeaderCell>
                                                <CTableHeaderCell scope="col">Renewals</CTableHeaderCell>
                                                <CTableHeaderCell scope="col">
                                                    Balance Collection
                                                </CTableHeaderCell>
                                                <CTableHeaderCell scope="col">View</CTableHeaderCell>
                                                <CTableHeaderCell scope="col">Achived %</CTableHeaderCell>
                                            </CTableRow>
                                        </CTableHead>
                                        <CTableBody>
                                            <CTableRow>
                                                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                                <CTableDataCell>Sejal</CTableDataCell>
                                                <CTableDataCell>10000</CTableDataCell>
                                                <CTableDataCell>10000</CTableDataCell>
                                                <CTableDataCell>5000</CTableDataCell>
                                                <CTableDataCell>2000</CTableDataCell>
                                                <CTableDataCell>3000</CTableDataCell>
                                                <CTableDataCell>View</CTableDataCell>
                                                <CTableDataCell>100%</CTableDataCell>
                                            </CTableRow>
                                            <CTableRow>
                                                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                                <CTableDataCell>Sejal</CTableDataCell>
                                                <CTableDataCell>10000</CTableDataCell>
                                                <CTableDataCell>10000</CTableDataCell>
                                                <CTableDataCell>5000</CTableDataCell>
                                                <CTableDataCell>2000</CTableDataCell>
                                                <CTableDataCell>3000</CTableDataCell>
                                                <CTableDataCell>View</CTableDataCell>
                                                <CTableDataCell>100%</CTableDataCell>
                                            </CTableRow>
                                            <CTableRow>
                                                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                                <CTableDataCell>Sejal</CTableDataCell>
                                                <CTableDataCell>10000</CTableDataCell>
                                                <CTableDataCell>10000</CTableDataCell>
                                                <CTableDataCell>5000</CTableDataCell>
                                                <CTableDataCell>2000</CTableDataCell>
                                                <CTableDataCell>3000</CTableDataCell>
                                                <CTableDataCell>View</CTableDataCell>
                                                <CTableDataCell>100%</CTableDataCell>
                                            </CTableRow>
                                        </CTableBody>
                                    </CTable>
                                </CCardBody>
                            </CCard>
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem itemKey={2}>
                        <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                        <CAccordionBody>
                            <strong>
                                This is the second item&#39;s accordion body.
                            </strong>{' '}
                            It is hidden by default, until the collapse plugin adds the
                            appropriate classes that we use to style each element. These
                            classes control the overall appearance, as well as the
                            showing and hiding via CSS transitions. You can modify any
                            of this with custom CSS or overriding our default variables.
                            It&#39;s also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem itemKey={3}>
                        <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                        <CAccordionBody>
                            <strong>
                                This is the second item&#39;s accordion body.
                            </strong>{' '}
                            It is hidden by default, until the collapse plugin adds the
                            appropriate classes that we use to style each element. These
                            classes control the overall appearance, as well as the
                            showing and hiding via CSS transitions. You can modify any
                            of this with custom CSS or overriding our default variables.
                            It&#39;s also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                        </CAccordionBody>
                    </CAccordionItem>
                </CAccordion>
            </CCol>
        </CRow>
    )
}
export default EmployeeDashboard
