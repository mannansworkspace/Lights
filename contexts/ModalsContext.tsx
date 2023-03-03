import { createContext, FC, ReactElement, useState } from "react";
import CatalougeModal from "@components/CatalogueModel"
import AppointmentModal from "@components/AppointmentModal";
import SuccessModal from "@components/SuccessModal";

interface ModalsContext {
    showCatalogueModal: boolean;
    showAppointmentModal: boolean;
    showSuccessModal: boolean;

    setShowCatalogueModal: (value: boolean) => void;
    setShowAppointmentModal: (value: boolean) => void;
    setShowSuccessModal: (value: boolean) => void;
}

export const ModalsContext = createContext<ModalsContext>({} as ModalsContext)

interface Props {
    children: ReactElement
}

const ModalsContextProvider: FC<Props> = ({ children }) => {
    const [showCatalogueModal, setShowCatalogueModal] = useState<boolean>(false)
    const [showAppointmentModal, setShowAppointmentModal] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)

    return <ModalsContext.Provider
        value={{
            showCatalogueModal,
            showAppointmentModal,
            showSuccessModal,

            setShowCatalogueModal,
            setShowAppointmentModal,
            setShowSuccessModal
        }}>
        <>
            {children}
            <CatalougeModal />
            <AppointmentModal />
            <SuccessModal />
        </>
    </ModalsContext.Provider>
}
export default ModalsContextProvider