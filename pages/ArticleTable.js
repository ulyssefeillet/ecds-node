import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

export default function ArticleTable ({articles}) {

    const citiesList = [
        'Eruption',
        'Tsunami',
        'Flood',
        'Earthquake',
        'Wildfire',
        'Blizzards',
    ];

    const loading = {'title':'Loading...', 'description':'Loading...', 'date':'Loading...','keywords':'Loading...', 'author':'Loading...'}

    const columns = useMemo(() => [
        {
            accessorKey: 'title',
            header: 'Title',
        },
        {
            accessorKey: 'description',
            header: 'Description', 
        },
        {
            accessorKey: 'date',
            header: 'Date',
        },
        {
            accessorKey: 'type',
            header: 'Type',
            filterSelectOptions: citiesList,
            filterVariant: 'select'
        },
        {
            accessorKey: 'site',
            header: 'Site',
        },
    ],[],
    );

    return (
        <MaterialReactTable 
            columns={columns} 
            data={Array.isArray(articles) ? articles : loading} 
            enableStickyHeader
            enableStickyFooter
            enableDensityToggle={false}
            enableHiding={false}
            muiTableContainerProps={{ sx: { maxHeight: '500px' } }} 
            onColumnFiltersChange
         />
    );
};