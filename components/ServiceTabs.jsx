"use client";
import { useState } from 'react';
import ServiceCard from './ServiceCard';
import styles from './ServiceTabs.module.css';

const ServiceTabs = () => {
    const [activeTab, setActiveTab] = useState('employment');

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabHeader}>
                <button
                    className={`${styles.tabBtn} ${activeTab === 'employment' ? styles.active : ''}`}
                    onClick={() => setActiveTab('employment')}
                >
                    Employment Services
                </button>
                <button
                    className={`${styles.tabBtn} ${activeTab === 'logistics' ? styles.active : ''}`}
                    onClick={() => setActiveTab('logistics')}
                >
                    Logistics Services
                </button>
            </div>

            <div className={styles.tabContent}>
                {activeTab === 'employment' && (
                    <div className={styles.slideIn}>
                        <div className={styles.categoryHeader}>
                            <h2>Workforce & Staffing Solutions</h2>
                            <p>Tailored recruitment strategies to fit your business needs.</p>
                        </div>
                        <div className={styles.grid}>
                            <ServiceCard
                                title="Permanent Staffing"
                                description="Find long-term employees who fit your company culture and goals."
                                link="/services/employment"
                                icon="👔"
                            />
                            <ServiceCard
                                title="Contract Staffing"
                                description="Flexible staffing solutions for short-term projects and seasonal needs."
                                link="/services/employment"
                                icon="⏱️"
                            />
                            <ServiceCard
                                title="Executive Search"
                                description="Headhunting top-tier leadership for critical roles."
                                link="/services/employment"
                                icon="🔍"
                            />
                            <ServiceCard
                                title="HR Consulting"
                                description="Optimize your HR processes with our expert consulting."
                                link="/services/employment"
                                icon="📊"
                            />
                        </div>
                    </div>
                )}

                {activeTab === 'logistics' && (
                    <div className={styles.slideIn}>
                        <div className={styles.categoryHeader}>
                            <h2>Relocation & Logistics Solutions</h2>
                            <p>Seamless movement of goods, vehicles, and households.</p>
                        </div>
                        <div className={styles.grid}>
                            <ServiceCard
                                title="Household Relocation"
                                description="Stress-free moving for your family with packing and unpacking services."
                                link="/services/logistics"
                                icon="🏠"
                            />
                            <ServiceCard
                                title="Office Relocation"
                                description="Seamless transition for your office with minimal disruption."
                                link="/services/logistics"
                                icon="🏢"
                            />
                            <ServiceCard
                                title="Warehousing & Storage"
                                description="Secure short-term and long-term storage solutions."
                                link="/services/logistics"
                                icon="📦"
                            />
                            <ServiceCard
                                title="Vehicle Transportation"
                                description="Safe transportation of cars and bikes across the country."
                                link="/services/logistics"
                                icon="🚗"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceTabs;
