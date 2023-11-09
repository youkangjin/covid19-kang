const SelectedItem = ({ setSelected, selected, resultRef }) => {
  const btnHandler = (e) => {
    e.preventDefault();
    const checkedLabels = Array.from(resultRef.current)
      .filter((ref) => ref && ref.childNodes[0] && ref.childNodes[0].checked && ref.childNodes[0].id !== 'selectAll') // Exclude the "selectAll" checkbox
      .map((ref) => ref.childNodes[1].textContent);

    const updateSelected = selected.filter(
      (item) => !checkedLabels.includes(item)
    );
    setSelected(updateSelected);

    // 체크박스 선택 해제
    Array.from(resultRef.current).forEach((ref) => {
      if (ref && ref.childNodes[0] && ref.childNodes[0].checked) {
        ref.childNodes[0].checked = false;
      }
    });
  };

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    Array.from(resultRef.current).forEach((ref) => {
      if (ref && ref.childNodes[0]) {
        ref.childNodes[0].checked = isChecked;
      }
    });
  };

  return (
    <div className="card">
      <form onSubmit={btnHandler}>
        {selected.length === 0 ? (
          <span>선택한 국가가 없습니다.</span>
        ) : (
          <div>
            <label>
              <input
                type="checkbox"
                name="selectAll"
                id="selectAll"
                onChange={handleSelectAll}
              />
              <form className="allClear">
                <span>전체 삭제</span>
              </form>
            </label>
            {selected.map((l, index) => {
              return (
                <label key={index} ref={(ref) => (resultRef.current[index] = ref)}>
                  <input type="checkbox" name="checkbox" id={`checkbox-${index}`} />
                  {l}
                </label>
              );
            })}
          </div>
        )}
        {selected.length === 0 ? (
          ""
        ) : (
          <button type="submit">삭제</button>
        )}
      </form>
    </div>
  );
};

export default SelectedItem;