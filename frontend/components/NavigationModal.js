import React from 'react';
import {connect} from 'react-redux';
import {updateModal} from '../reducers/websiteReducer'


let NavigationModal = (props) => {
    return ( 
        props.showModal ?
            <div id = "navigationmodal" className = "navigationmodal" onClick = {() => {
                props.updateModal(props.showModal)
            }}> 
                <span className = "close" onClick = {() => {
                    props.updateModal(props.showModal)
                }}>&times;</span> 
                <div id = 'modalnavbox'>
                    <a href = '/home' className = 'modalnavitem'> Home </a>
                    <a href = '/about' className = 'modalnavitem'> About </a>
                    <a href = '/work' className = 'modalnavitem'> Work </a>
                    <a href = '/blog' className = 'modalnavitem'> Blog </a>
                </div>
            </div>
        : 
             null
    );
}

const mapStateToProps = (state) => {
    return {
      showModal: state.website.showModal
    }
}
  
NavigationModal = connect(mapStateToProps, {updateModal})(NavigationModal)

export default NavigationModal; 