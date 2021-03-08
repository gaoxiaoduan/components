import { Checkbox, Row, Col } from "antd";
import "./index.css";
const PictureSelect = (props) => {
  const { pictures, value, onChange } = props;

  const handleChange = (id) => (e) => {
    const { target } = e;
    if (target.checked) onChange([...value, id]);
    //勾选
    else onChange(value.filter((i) => i !== id)); //取消勾选
  };

  const handleAllChange = (e) => {
    const { target } = e;
    if (target.checked) onChange(pictures.map((p) => p.id));
    //全选
    else onChange([]); //反选
  };

  return (
    <div>
      {/* 多选框 */}
      <div className="CheckBoxAll">
        <Checkbox
          onChange={handleAllChange}
          indeterminate={
            value.length > 0 &&
            Array.from(new Set([...value])).length < pictures.length
          }
          checked={
            value.length > 0 &&
            Array.from(new Set([...value])).length === pictures.length
          }
        >
          {value.length
            ? `已选中 ${Array.from(new Set([...value])).length} 个文件`
            : "全选"}
        </Checkbox>
      </div>
      
      {/* 图标展示区 */}
      <Row>
        {pictures.map((item) => (
          <Col span={2} key={item.id}>
            <div className="wrap">
              <Checkbox
                className="checkbox"
                onChange={handleChange(item.id)}
                checked={value.indexOf(item.id) > -1}
              />
              <img src={item.url} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PictureSelect;
