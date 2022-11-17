@extends('layouts.admin.admin-layout')

@section('content-admin')
    <div class="w-full bg-gray-200 rounded p-1 md:p-3 flex flex-col md:flex-row flex-wrap ">
        <div class="w-full p-1 font-bold text-2xl">List of For verification Applications(s)</div>
        <div class="w-full md:w-1/2 p-1 bg-white mt-1">
            <div class="w-full font-bold">List of New Application(s)</div>
            <div class="w-full text-xs text-rose-500 font-bold">{{$newbusinesscount}} application/s pending</div>
                    <div class="flex flex-row flex-wrap w-full p-2 font-bold bg-gray-100 text-lg">
                        <span class="w-1/5 ">TransID</span>
                        <span class="w-3/5 ">BusinessName</span>
                        <span class="w-1/5 ">Barangay</span>
                    </div>
                @foreach($newBusiness as $list => $data)
                {{$colored = $list+1 % 2 === 0}}
                    <a class='flex flex-row flex-wrap w-full p-1 hover:cursor-pointer {{$list%2 !== 0 ? "bg-gray-100" : ""}}'>
                        <span class="w-1/5 truncate text-left p-1">{{$data['trans_id']}}</span>
                        <span class="w-3/5 truncate text-left p-1">{{$data['business_name']}} {{$data['business_name']}}</span>
                        <span class="w-1/5 truncate text-left p-1">{{$data['barangay']}}</span>
                    </a>
                @endforeach
        </div>
        <div class="w-full md:w-1/2 p-1 bg-white md:mt-2 mt-1">
            <div class="w-full font-bold">List of Renewal Application(s)</div>
            <div class="w-full text-xs text-rose-500 font-bold">{{$renewalcount}} application/s pending</div>
                    <div class='flex flex-row flex-wrap w-full p-1 font-bold bg-gray-100 text-lg'>
                        <span class="w-1/5 ">TransID</span>
                        <span class="w-3/5 ">AccNumber</span>
                        <span class="w-1/5 ">Gross</span>
                    </div>
                @foreach($renewal as $rlist => $rdata)
                    <a class='flex flex-row flex-wrap w-full p-1 hover:cursor-pointer {{$rlist%2 !== 0 ? "bg-gray-100" : ""}} hover:bg-gray-200'>
                        <span class="w-1/5 truncate text-left p-1">{{$rdata['trans_id']}}</span>
                        <span class="w-3/5 truncate text-left p-1">{{$rdata['account_number']}}</span>
                        <span class="w-1/5 truncate text-left p-1">{{$rdata['gross_income']}}{{$rdata['gross_income']}}</span>
                    </a>
                @endforeach
        </div>
    </div>
    
@endsection