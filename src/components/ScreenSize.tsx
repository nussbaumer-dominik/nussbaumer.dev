import {createSignal, onCleanup, onMount} from "solid-js";

export const ScreenSize = () => {
    const [width, setWidth] = createSignal(0);
    const [height, setHeight] = createSignal(0);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    onMount(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        onCleanup(() => {
            window.removeEventListener("resize", updateDimensions);
        });
    });

    return (
        <div
            class="fixed bottom-5 right-5 z-50 flex items-center space-x-2 rounded-full bg-black px-2.5 py-1 font-mono text-xs font-medium text-white">
            <span>
                {width().toLocaleString()} x {height().toLocaleString()}
            </span>
            <div class="h-4 w-px bg-gray-800"/>
            <span class="sm:hidden">XS</span>
            <span class="hidden sm:inline md:hidden">SM</span>
            <span class="hidden md:inline lg:hidden">MD</span>
            <span class="hidden lg:inline xl:hidden">LG</span>
            <span class="hidden xl:inline 2xl:hidden">XL</span>
            <span class="hidden 2xl:inline">2XL</span>
        </div>
    );
};
