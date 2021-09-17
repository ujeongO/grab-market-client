// 자식 컴포넌트
function ChildComponent(props) {
  const { name, age } = props;

  return (
    <div>
      <p>
        {/* jsx 문법 */}
        이름은 {name}이고 {age}살입니다.
      </p>
    </div>
  );
}

export default ChildComponent;
