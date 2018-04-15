// @flow
import * as React from 'react';
import { Grid } from 'material-ui';

type Props = {
    logo: React.Node,
    field: React.Node,
};

export const IconFieldLayout = ({ logo, field }: Props) => (
    <Grid container spacing={8} alignItems="flex-end">
        <Grid item xs={1}>
            {logo}
        </Grid>
        <Grid item xs={11}>
            {field}
        </Grid>
    </Grid>
);
