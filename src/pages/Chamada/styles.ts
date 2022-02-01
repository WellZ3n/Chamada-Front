import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

    #confirmar {
        margin-top: 550px;
        margin-right: 35px;
        color: #000;
        background-color: #67b061;
        border: none;
        padding: 10px 46px;
        text-decoration: none;
        cursor: pointer;
        border-radius: 10px;
        height: 40px;
        width: 150px;
    }
    
    #cadastrar {
        margin-right: 15px;
        float: left;
        padding: 20px;
        margin-top: 21%;
        width: 300px;
        background-color: #d6d6d6;
        height: 26%;
        border-radius: 20px;
        font-size: 25px;
        font-weight: 500;
        color: #000;

        #nameInput {
            margin-top: 10px;
            width: 100%;
            border-radius: 5px;
            border: none;
            padding: 5px;
        }

        #enviar {
            color: #000;
            margin-top: 10px;
            background-color: #67b061;
            border: none;
            padding: 10px 46px;
            text-decoration: none;
            cursor: pointer;
            border-radius: 10px;
            height: 40px;
            width: 100%;
        }
    }

    #excluir {
        margin-right: 15px;
        float: left;
        padding: 20px;
        margin-top: 3%;
        width: 300px;
        background-color: #d6d6d6;
        height: 21%;
        border-radius: 20px;
        font-size: 25px;
        font-weight: 500;
        color: #000;

        #idInput {
            float: right;
            margin-left: 15px;
            margin-top: 3px;
            width: 18%;
            border-radius: 5px;
            border: none;
            padding: 5px;
            text-align: center;
        }

        #enviar {
            color: #000;
            margin-top: 18px;
            background-color: #67b061;
            border: none;
            padding: 10px 46px;
            text-decoration: none;
            cursor: pointer;
            border-radius: 10px;
            height: 40px;
            width: 100%;
        }
    }

    #editar {
        margin-right: 15px;
        float: left;
        padding: 20px;
        margin-top: 3%;
        width: 300px;
        background-color: #d6d6d6;
        height: 27%;
        border-radius: 20px;
        font-size: 25px;
        font-weight: 500;
        color: #000;

        #idInput {
            float: right;
            margin-left: 15px;
            margin-top: 5px;
            width: 18%;
            border-radius: 5px;
            border: none;
            padding: 5px;
            text-align: center;
        }

        #nameInput {
            margin-top: 10px;
            width: 100%;
            border-radius: 5px;
            border: none;
            padding: 5px;
        }

        #enviar {
            width: 100%;
            color: #000;
            margin-top: 10px;
            background-color: #67b061;
            border: none;
            padding: 10px 46px;
            text-decoration: none;
            cursor: pointer;
            border-radius: 10px;
            height: 40px;
        }
    }

    #chamada{
    height: 490px;
    width: 1800px;
    margin: 6%;
    background-color: #d6d6d6;
    padding: 20px;
    border-radius: 20px;
    }
    
    #enviar {
        font-weight: 500;
        float: right;
        color: #000;
        margin-top: 140px;
        background-color: #67b061;
        border: none;
        padding: 10px 46px;
        text-decoration: none;
        cursor: pointer;
        border-radius: 10px;
        height: 40px;
        width: 150px;
    }

    #form {
        width: 100%;
    }

    #titleContent {
        font-size: 25px;
        color: #000;
        font-weight: 500;
    }

    #name {
        overflow: auto;
        white-space: nowrap;
        height: 50px
        max-height: 50px
        margin: 1px;
        float: left;
        width: 49.6%;
        max-width: 49.6%;
        border: ridge;
        border-size: 1px;
        color: #000;
        font-size: 25px;

        #label {
            margin-left: 5px
        }
        
        #check {
            float: right;
            margin-top: 8px;
            margin-right 5px;
            width: 20px;
            height: 20px;
            border: none;
      }  
    }
}`;