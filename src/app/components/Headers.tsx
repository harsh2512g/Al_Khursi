import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import CommonModal from './commonModal';
import ContactUsModal from './contactUsModal';

const Header: React.FC = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const [contactUsModal, setContactUsModal] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    const onOpenChange = (keys: string[]) => {
        setOpenKeys(keys);
    };

    const menuItems = (
        <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} className='className="sticky top-0 z-50 shadow-md" !bg-blue-50' style={{ width: '100%' }}>

            <Menu.Item key="pricing">
                <Link href="/#ourExpertise">
                    <div>Our Expertise</div>
                </Link>
            </Menu.Item>
            <Menu.Item key="pricing">
                <Link href="/#industries">
                    <div>Industries</div>
                </Link>
            </Menu.Item>
            <Menu.Item key="pricing">
                <Link href="/#partnership">
                    <div>Al Khursi LLP & Treint Partnership</div>
                </Link>
            </Menu.Item>
        </Menu>
    );

    const handleCancel = () => {
        setContactUsModal(false);
    }

    return (
        <>
            <header className="flex w-full justify-between pt-5 absolute z-50">
                <div className="w-full flex justify-between  gap-14">
                    <div className="flex items-center">
                        <Link href={'/'} className='h-fit'>
                            <img src="/assets/images/logo.png" alt="logo" className='w-28 h-16' />
                        </Link>
                    </div>

                    {/* Desktop View */}
                    <div className="hidden sm:flex gap-8 items-center justify-end font-semibold w-full text-white">
                        <Link href='/#ourExpertise' className="dropdown-trigger hover:!text-[#CADCFC]">
                            <span className='text-md  '>
                                Our Expertise
                            </span>
                        </Link>
                        <Link href='/#industries' className="dropdown-trigger hover:!text-[#CADCFC]">
                            <span className='text-md '>
                                Industries
                            </span>
                        </Link>
                        <Link href='/#partnership' className="dropdown-trigger hover:!text-[#CADCFC]">
                            <span className='text-md '>
                                Al Khursi LLP & Treint Partnership
                            </span>
                        </Link>
                        {/* <div className="hidden md:flex hover:text-black" onClick={() => setContactUsModal(true)}>
                            <button className='  '>Contact us</button>
                        </div> */}
                    </div>
                </div>
                {/* <div className="hidden md:flex" onClick={() => setContactUsModal(true)}>
                    <button className='h-12 bg-customGreen hover:bg-customBlue text-white font-semibold px-4 text-sm rounded-lg whitespace-nowrap'>Contact us</button>
                </div> */}
                <div className="sm:hidden flex items-center">
                    <MenuUnfoldOutlined className="text-xl" onClick={showDrawer} />
                    <Drawer title="Menu" placement="right" onClose={closeDrawer} visible={drawerVisible} className='!bg-blue-50'>
                        {menuItems}
                    </Drawer>
                </div>
            </header>
            {contactUsModal && <div>
                <CommonModal
                    visible={contactUsModal}
                    onCancel={handleCancel}
                    width='400px'
                >
                    <ContactUsModal onCancel={handleCancel} />
                </CommonModal>

            </div>
            }
        </>
    );
};

export default Header;
