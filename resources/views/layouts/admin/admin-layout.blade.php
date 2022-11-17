<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="" id="">
    <!--bg-gradient-to-t from-emerald-400 via-white to-white -->
    <div class=" bg-orange-50 min-h-screen">
    <!-- <div class="bg-gradient-to-t from-red-800 via-red-400 to-white min-h-screen"> -->
        <!-- bg-gradient-to-t from-emerald-500 to-emerald-300 -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-to-t from-red-800 to-red-600">
            <div class="container">
                <a class="navbar-brand text-white text-2xl tracking-widest hover:text-pink-500" href="{{ url('/dashboard/admin') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
                <button class="navbar-toggler bg-red-700 border-2 border-red-400 shadow " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <div class="py-2 space-y-1">
                        <span class="block w-6 h-0.5 bg-gray-300 "></span>
                        <span class="block w-6 h-0.5 bg-gray-300 "></span>
                        <span class="block w-6 h-0.5 bg-gray-300"></span>
                    </div>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto text-gray-400">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link text-white tracking-widest" href="{{ route('admin.login') }}">{{ __('Login') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle text-white font-black tracking-widest capitalize" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->firstname  }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                        {{ Auth::user()->id  }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                        <input id="id" name="id" type="text" class="hidden" value="{{ Auth::user()->id }}">
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="p-3 px-5 md:p-1 ">
            <div class="w-full p-2 text-center rounded">
                @yield('content-admin')
            </div>
        </main>
    </div>
</body>
</html>
