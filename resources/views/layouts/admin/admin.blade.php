@extends('layouts.admin.admin-layout')

@section('content-admin')
    <div class="w-ful flex flex-col flex-wrap content-center">
        <div class="w-2/5 bg-gray-200 border-4 border-white shadow rounded p-3">
            <div class="w-full p-2 font-bold text-xl text-gray-700">ADMIN LOGIN</div>
            <div class="w-full flex flex-col">
                <form method="POST" action="{{ route('login.admin') }}" class="flex flex-col justify-content-center items-center">
                    @csrf
                    <div class="w-2/3 flex flex-col justify-content-start text-gray-400 font-bold p-2">
                        <span>Username</span>
                        <input type="text" name="username" id="username" class="p-1 w-full">
                    </div>
                    <div class="w-2/3 flex flex-col justify-content-start text-gray-400 font-bold p-2">
                        <span>Password</span>
                        <input type="password" name="password" id="password" class="p-1 w-full">
                    </div>
                    <div class="w-2/3 flex flex-col justify-content-start text-gray-400 font-bold p-2 pt-4">
                        <input type="submit" name="login" id="login" value="Login" class="p-1 w-full border-2 border-white rounded transition hover:scale-105">
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection