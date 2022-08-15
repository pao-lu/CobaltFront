<template>
    <table>
        <thead>
            <slot name="thead"></slot>
        </thead>
        <tbody>
            <slot name="tbody"></slot>
        </tbody>
    </table>
</template>

<style lang="less" scoped>
table {
    border-collapse: collapse;

    :deep(th),
    :deep(td) {
        padding: 0 3px;
    }

    thead {
        padding-bottom: 0.5em;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        line-height: 36px;
        // background-color: #f5f5f5;
    }

    tbody {
        line-height: 30.6px;

        // :deep(tr:nth-child(2n)) {
        //     background-color: #eee;
        // }
    }

    :deep(tr:hover) {
        background: #eee;
    }

    &.strip {
        :deep(tbody>tr:nth-child(2n+1)) {
            background: #f9f9f9;

            &:hover {
                background: #eee;
            }
        }
    }

    @media screen and (max-width: 600px) {

        thead {
            display: none;
        }

        :deep(tr) {
            display: block;
            padding: 20px 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.12);

            &:last-child {
                border-bottom: none;
            }
        }

        :deep(td) {
            display: block;

            position: relative;
            display: block;
            text-align: right;

            &::before {
                position: absolute;
                left: 10px;
                font-weight: 400;
                content: attr(data-label);
            }
        }
    }

}
</style>