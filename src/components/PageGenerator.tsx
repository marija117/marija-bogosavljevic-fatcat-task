import React from 'react';

import { Hero, HeroProps } from '@homework-task/components/Hero';
import {
    ItemsShowcase,
    ItemsProps,
} from '@homework-task/components/ItemsShowcase';
import { Layout, LayoutProps } from '@homework-task/components/Layout';
import { TrustBar, TrustBarProps } from '@homework-task/components/TrustBar';

type ComponentProps = HeroProps | ItemsProps | TrustBarProps;

const componentMap: { [key: string]: React.FC<ComponentProps> } = {
    componentHero: (props: ComponentProps) => (
        <Hero {...(props as HeroProps)} />
    ),
    componentItemsShowcase: (props: ComponentProps) => (
        <ItemsShowcase {...(props as ItemsProps)} />
    ),
    componentTrustBar: (props: ComponentProps) => (
        <TrustBar {...(props as TrustBarProps)} />
    ),
};

const layoutMap: { [key: string]: React.FC<LayoutProps> } = {
    layoutSection: Layout,
};

interface Section {
    type: string;
    components: { type: string; props: ComponentProps }[];
    props: LayoutProps;
}

interface PageGeneratorProps {
    sections: Section[];
}

export const PageGenerator: React.FC<PageGeneratorProps> = ({ sections }) => {
    return (
        <div>
            {sections.map((section, index) => {
                const LayoutComponent =
                    layoutMap[section.type] || layoutMap['layoutSection'];
                return (
                    <LayoutComponent key={index} {...section.props}>
                        {section.components.map((component, index) => {
                            const Component = componentMap[component.type];
                            if (Component) {
                                return (
                                    <Component
                                        key={index}
                                        {...component.props}
                                    />
                                );
                            }
                            return null;
                        })}
                    </LayoutComponent>
                );
            })}
        </div>
    );
};

export type { Section };
