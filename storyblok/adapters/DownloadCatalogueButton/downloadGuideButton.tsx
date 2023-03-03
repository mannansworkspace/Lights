import { Button } from "@chakra-ui/react";
import type { ReactStoryblokComponent } from "@sb-types";
import { ModalsContext } from "contexts/ModalsContext";
import { useContext } from "react";

export type ButtonProps = {
    text: string;
    variant: "white" | "black";
    size: "md" | "lg";
};

const DownloadCatalogueAdapter = ({ blok: { text, variant, size } }: ReactStoryblokComponent<ButtonProps>) => {

    const { setShowCatalogueModal } = useContext(ModalsContext)

    return (
        <Button cursor={'pointer'} onClick={() => setShowCatalogueModal(true)} variant={variant} size={size} as="a">
            {text}
        </Button>
    );
};

export default DownloadCatalogueAdapter;
