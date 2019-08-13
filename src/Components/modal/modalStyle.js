import styled from 'styled-components';

const ModalStyle = styled.div`
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
  
  .modal-main {
    padding:10px;
    position:fixed;
    background: white;
    width: 30%;
    text-align: center;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  
  .display-block {
    display: block;
  }
  
  .input-name,.input-username,.select-username{
    margin:5px;
    padding:10px;
  }

  .button-submit{
    margin:5px;
    padding:5px;
  }
  
  .display-none {
    display: none;
  }
`;
export default ModalStyle;
