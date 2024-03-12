import { Button, Flex, Divider, Table } from "antd";
import { columns, data } from "../constant.js";

const CrudPage = () => {
  return (
    <div>
      <Flex align="center" justify="end">
        <Button style={{ marginTop: "100px" }} type="primary">
          Yeni Görev Ekle
        </Button>
      </Flex>
      <Divider>Redux Toolkit</Divider>
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  );
};

export default CrudPage;
