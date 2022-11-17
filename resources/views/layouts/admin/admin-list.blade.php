@extends('layouts.admin.admin-layout')

@section('content-admin')
    <div class="w-full bg-red-500 p-2 flex flex-col md:flex-row flex-wrap rounded-t">
        <div class="w-full p-1">List of For verification Applications(s)</div>
        <div class="w-full md:w-1/2 p-1 bg-white">
            <div class="w-full">List of New Application(s)</div>
                    <div class="flex flex-row flex-wrap w-full p-1 hover:cursor-pointer">
                        <span class="w-1/5 bg-blue-500">TransID</span>
                        <span class="w-3/5 bg-blue-500">BusinessName</span>
                        <span class="w-1/5 bg-blue-500">Barangay</span>
                    </div>
                @foreach($newBusiness as $list => $data)
                    <div class="flex flex-row flex-wrap w-full p-1 hover:cursor-pointer">
                        <span class="w-1/5 bg-red-500">{{$data['trans_id']}}</span>
                        <span class="w-3/5 bg-green-500">{{$data['business_name']}}</span>
                        <span class="w-1/5 bg-blue-500">{{$data['barangay']}}</span>
                    </div>
                @endforeach
        </div>
        <div class="w-full md:w-1/2 p-1 bg-red-100">
            <div class="w-full">List of Renewal Application(s)</div>
                    <div class="flex flex-row flex-wrap w-full p-1 hover:cursor-pointer">
                        <span class="w-1/5 bg-blue-500">TransID</span>
                        <span class="w-3/5 bg-blue-500">AccNumber</span>
                        <span class="w-1/5 bg-blue-500">Gross</span>
                    </div>
                @foreach($renewal as $rlist => $rdata)
                    <div class="flex flex-row flex-wrap w-full p-1 hover:cursor-pointer">
                        <span class="w-1/5 bg-blue-500">{{$rdata['trans_id']}}</span>
                        <span class="w-3/5 bg-red-500">{{$rdata['account_number']}}</span>
                        <span class="w-1/5 bg-green-500">{{$rdata['gross_income']}}</span>
                    </div>
                @endforeach
        </div>
    </div>
    
@endsection