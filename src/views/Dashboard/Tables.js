import React from "react";

// Chakra imports
import { Flex, Table, Tbody, Text, Th, Thead, Tr, Button } from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

// Table Components
import TablesTableRow from "components/Tables/TablesTableRow";

// Data
import { tablesTableData } from "variables/general";

// Icons

function Tables() {
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      {/* Authors Table */}
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px" dislay="flex" justify-content="space-between">
          <Text fontSize="lg" color="#fff" fontWeight="bold">
            Danh sách
          </Text>
          <Button>Thêm Thành viên</Button>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color="#fff">
            <Thead>
              <Tr my=".8rem" ps="0px" color="gray.400">
                <Th ps="0px" color="gray.400" fontFamily="Plus Jakarta Display" borderBottomColor="#56577A">
                  Tên
                </Th>
                <Th color="gray.400" fontFamily="Plus Jakarta Display" borderBottomColor="#56577A">
                  Số điện thoại
                </Th>
                <Th color="gray.400" fontFamily="Plus Jakarta Display" borderBottomColor="#56577A">
                  Trạng thái
                </Th>
                <Th color="gray.400" fontFamily="Plus Jakarta Display" borderBottomColor="#56577A">
                  Ngày vào
                </Th>
                <Th borderBottomColor="#56577A"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesTableData.map((row, index, arr) => {
                return (
                  <TablesTableRow
                    name={row.name}
                    logo={row.logo}
                    email={row.email}
                    subdomain={row.subdomain}
                    domain={row.domain}
                    status={row.status}
                    date={row.date}
                    lastItem={index === arr.length - 1 ? true : false}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
