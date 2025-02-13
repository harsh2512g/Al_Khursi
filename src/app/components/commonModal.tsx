// CommonModal.tsx
import React from 'react';
import { Modal } from 'antd';

interface CommonModalProps {
    visible: boolean;
    onCancel: () => void;
    children: React.ReactNode; // For content inside the modal
    width?: string | number;
}

const CommonModal: React.FC<CommonModalProps> = ({
    visible,
    onCancel,
    children,
    width = '520px'
}) => {
    return (
        <Modal
            open={visible}
            className='p-4'
            footer={null}
            onCancel={onCancel}
            width={width}
        >
            {children}
        </Modal>
    );
};

export default CommonModal;
