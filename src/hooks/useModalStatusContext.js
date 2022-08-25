import { useContext } from "react";
import { ModalStatusContext } from "contexts";

function useModalStatusContext() {
    const { showModal, setShowModal } = useContext(ModalStatusContext);
    return { showModal, setShowModal };
}

export default useModalStatusContext;
