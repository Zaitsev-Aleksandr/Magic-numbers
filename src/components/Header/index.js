import React, {useCallback, useState} from 'react';
import Input from "../common/form/Input";
import Info from "../common/icon/Info";
import {toggleInfo} from "../../redux/actions";
import {takeInputValue} from "../../redux/actions";
import {connect} from 'react-redux'
import CommonModalBlock from "../common/ModalWindow/ComonModalBlock";

const Header = ({description, toggleInfoAction, startMagicAction, createTableValueAction}) => {
    const [inputValue, addValue] = useState({});
    const storeMagicValue = useCallback(() => {
        startMagicAction(inputValue)
    }, [inputValue, startMagicAction]);

    const magicValue = useCallback((e) => {
       if( e.currentTarget.value.length < 99 ){ let key = e.currentTarget.id;
           const newSate = {...inputValue};
           newSate[key] = e.currentTarget.value;
           addValue(newSate)}
       else e.preventDefault();
    }, [inputValue, addValue]);

    return (
        <div className="header d-flex w-100 position-relative">
            <span className="header-title">Magic numbers </span>
            <form className=" d-flex flex-nowrap align-items-center">
                <label className="input-label mr-2 mb-0">Row -</label>
                <Input onChange={magicValue}
                       id="row"
                       type="number"/>
                <label className="input-label mr-2 mb-0">Column -</label>
                <Input onChange={magicValue}
                       id='column'
                       type="number"/>
                <label className="input-label mr-2 mb-0">Adjoining -</label>
                <Input onChange={magicValue}
                       id="adjoining"
                       type="number"/>

                <div className="my-btn btn__dark" onClick={storeMagicValue}> Start Magic</div>
                <Info title={"description of soft"} className={`ml-3 ${description ? "active" : ""}`}
                      onClick={toggleInfoAction}/>
            </form>
            <CommonModalBlock className={`${description ? "active" : ""}`} toggleInfo={toggleInfoAction}/>
        </div>
    );
};

const mapStateToProps = state => ({
    description: state.description.description,
});

const mapDispatchToProps = {
    toggleInfoAction: toggleInfo,
    startMagicAction: takeInputValue
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
