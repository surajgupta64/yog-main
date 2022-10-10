import React from 'react'

import {
    CAvatar,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CFormSwitch,
    CProgress,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const DataTable = ({ heading, data }) => {

    return (
        <CTable align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                <CTableRow >
                    {heading.map((item, index) => (
                        <CTableHeaderCell key={index}>{item.heading}</CTableHeaderCell>
                    ))}
                </CTableRow>
            </CTableHead>
            <CTableBody>
                {data.map((item) => (
                    <TableRow item={item} column={heading} />
                ))}
            </CTableBody>
        </CTable>
    );
};

const TableRow = ({ item, column }) => (
    <CTableRow>
        {column.map((columnItem, index) => {
            return (
                <CTableDataCell key={index}>
                    {columnItem.value === 'key' && index + 1}
                    {columnItem.value !== undefined && item[`${columnItem.value}`]}
                    {columnItem.iconBtn !== undefined && (
                        <CIcon
                            size="xl"
                            style={{ borderRadius: '15px' }}
                            icon={columnItem.iconBtn}
                        />
                    )}
                    {columnItem.Btn === 'switch' && (
                        <CFormSwitch size="xl" checked={item[`${columnItem.switchValue}`]} />
                    )}
                    {columnItem.btn !== undefined && (
                        <CButton style={{ color: 'white', backgroundColor: '#0B5345' }}> {columnItem.btn}</CButton>
                    )}
                    {columnItem.com !== undefined && (
                        columnItem.com
                    )}
                </CTableDataCell>

            )
        })}
    </CTableRow >
);

export default DataTable;
